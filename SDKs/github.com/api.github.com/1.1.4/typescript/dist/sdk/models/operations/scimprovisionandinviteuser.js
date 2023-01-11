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
exports.ScimProvisionAndInviteUserResponse = exports.ScimProvisionAndInviteUserRequest = exports.ScimProvisionAndInviteUserRequestBody = exports.ScimProvisionAndInviteUserRequestBodyName = exports.ScimProvisionAndInviteUserRequestBodyEmails = exports.ScimProvisionAndInviteUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ScimProvisionAndInviteUserPathParams = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserPathParams, _super);
    function ScimProvisionAndInviteUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserPathParams.prototype, "org", void 0);
    return ScimProvisionAndInviteUserPathParams;
}(utils_1.SpeakeasyBase));
exports.ScimProvisionAndInviteUserPathParams = ScimProvisionAndInviteUserPathParams;
var ScimProvisionAndInviteUserRequestBodyEmails = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserRequestBodyEmails, _super);
    function ScimProvisionAndInviteUserRequestBodyEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], ScimProvisionAndInviteUserRequestBodyEmails.prototype, "primary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyEmails.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyEmails.prototype, "value", void 0);
    return ScimProvisionAndInviteUserRequestBodyEmails;
}(utils_1.SpeakeasyBase));
exports.ScimProvisionAndInviteUserRequestBodyEmails = ScimProvisionAndInviteUserRequestBodyEmails;
var ScimProvisionAndInviteUserRequestBodyName = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserRequestBodyName, _super);
    function ScimProvisionAndInviteUserRequestBodyName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyName.prototype, "familyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formatted" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyName.prototype, "formatted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBodyName.prototype, "givenName", void 0);
    return ScimProvisionAndInviteUserRequestBodyName;
}(utils_1.SpeakeasyBase));
exports.ScimProvisionAndInviteUserRequestBodyName = ScimProvisionAndInviteUserRequestBodyName;
var ScimProvisionAndInviteUserRequestBody = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserRequestBody, _super);
    function ScimProvisionAndInviteUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emails", elemType: ScimProvisionAndInviteUserRequestBodyEmails }),
        __metadata("design:type", Array)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "emails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", ScimProvisionAndInviteUserRequestBodyName)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "schemas", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserRequestBody.prototype, "userName", void 0);
    return ScimProvisionAndInviteUserRequestBody;
}(utils_1.SpeakeasyBase));
exports.ScimProvisionAndInviteUserRequestBody = ScimProvisionAndInviteUserRequestBody;
var ScimProvisionAndInviteUserRequest = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserRequest, _super);
    function ScimProvisionAndInviteUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ScimProvisionAndInviteUserPathParams)
    ], ScimProvisionAndInviteUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ScimProvisionAndInviteUserRequestBody)
    ], ScimProvisionAndInviteUserRequest.prototype, "request", void 0);
    return ScimProvisionAndInviteUserRequest;
}(utils_1.SpeakeasyBase));
exports.ScimProvisionAndInviteUserRequest = ScimProvisionAndInviteUserRequest;
var ScimProvisionAndInviteUserResponse = /** @class */ (function (_super) {
    __extends(ScimProvisionAndInviteUserResponse, _super);
    function ScimProvisionAndInviteUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ScimProvisionAndInviteUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ScimProvisionAndInviteUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScimError)
    ], ScimProvisionAndInviteUserResponse.prototype, "scimError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScimUser)
    ], ScimProvisionAndInviteUserResponse.prototype, "scimUser", void 0);
    return ScimProvisionAndInviteUserResponse;
}(utils_1.SpeakeasyBase));
exports.ScimProvisionAndInviteUserResponse = ScimProvisionAndInviteUserResponse;
