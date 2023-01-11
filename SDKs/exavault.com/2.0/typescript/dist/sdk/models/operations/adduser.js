"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserResponse = exports.AddUserRequest = exports.AddUserAddUserRequestBody = exports.AddUserAddUserRequestBodyRoleEnum = exports.AddUserAddUserRequestBodyPermissions = exports.AddUserHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddUserHeaders = /** @class */ (function (_super) {
    __extends(AddUserHeaders, _super);
    function AddUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], AddUserHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], AddUserHeaders.prototype, "evApiKey", void 0);
    return AddUserHeaders;
}(utils_1.SpeakeasyBase));
exports.AddUserHeaders = AddUserHeaders;
// AddUserAddUserRequestBodyPermissions
/**
 * An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission.
 * When creating a user with the `role` **admin**, you should set all of the permissions to `true`
**/
var AddUserAddUserRequestBodyPermissions = /** @class */ (function (_super) {
    __extends(AddUserAddUserRequestBodyPermissions, _super);
    function AddUserAddUserRequestBodyPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changePassword" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "changePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteFormData" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "deleteFormData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=list" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "list", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modify" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "modify", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notification" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "notification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "share", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "upload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=viewFormData" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBodyPermissions.prototype, "viewFormData", void 0);
    return AddUserAddUserRequestBodyPermissions;
}(utils_1.SpeakeasyBase));
exports.AddUserAddUserRequestBodyPermissions = AddUserAddUserRequestBodyPermissions;
var AddUserAddUserRequestBodyRoleEnum;
(function (AddUserAddUserRequestBodyRoleEnum) {
    AddUserAddUserRequestBodyRoleEnum["User"] = "user";
    AddUserAddUserRequestBodyRoleEnum["Admin"] = "admin";
})(AddUserAddUserRequestBodyRoleEnum = exports.AddUserAddUserRequestBodyRoleEnum || (exports.AddUserAddUserRequestBodyRoleEnum = {}));
var AddUserAddUserRequestBody = /** @class */ (function (_super) {
    __extends(AddUserAddUserRequestBody, _super);
    function AddUserAddUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddUserAddUserRequestBody.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiration" }),
        __metadata("design:type", String)
    ], AddUserAddUserRequestBody.prototype, "expiration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homeResource" }),
        __metadata("design:type", String)
    ], AddUserAddUserRequestBody.prototype, "homeResource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBody.prototype, "locked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], AddUserAddUserRequestBody.prototype, "nickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=onboarding" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBody.prototype, "onboarding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AddUserAddUserRequestBody.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permissions" }),
        __metadata("design:type", AddUserAddUserRequestBodyPermissions)
    ], AddUserAddUserRequestBody.prototype, "permissions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], AddUserAddUserRequestBody.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], AddUserAddUserRequestBody.prototype, "timeZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], AddUserAddUserRequestBody.prototype, "username", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=welcomeEmail" }),
        __metadata("design:type", Boolean)
    ], AddUserAddUserRequestBody.prototype, "welcomeEmail", void 0);
    return AddUserAddUserRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddUserAddUserRequestBody = AddUserAddUserRequestBody;
var AddUserRequest = /** @class */ (function (_super) {
    __extends(AddUserRequest, _super);
    function AddUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddUserHeaders)
    ], AddUserRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddUserAddUserRequestBody)
    ], AddUserRequest.prototype, "request", void 0);
    return AddUserRequest;
}(utils_1.SpeakeasyBase));
exports.AddUserRequest = AddUserRequest;
var AddUserResponse = /** @class */ (function (_super) {
    __extends(AddUserResponse, _super);
    function AddUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UserResponse)
    ], AddUserResponse.prototype, "userResponse", void 0);
    return AddUserResponse;
}(utils_1.SpeakeasyBase));
exports.AddUserResponse = AddUserResponse;
