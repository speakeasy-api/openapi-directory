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
exports.OrgsSetMembershipForUserResponse = exports.OrgsSetMembershipForUserRequest = exports.OrgsSetMembershipForUserRequestBody = exports.OrgsSetMembershipForUserRequestBodyRoleEnum = exports.OrgsSetMembershipForUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var OrgsSetMembershipForUserPathParams = /** @class */ (function (_super) {
    __extends(OrgsSetMembershipForUserPathParams, _super);
    function OrgsSetMembershipForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsSetMembershipForUserPathParams.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], OrgsSetMembershipForUserPathParams.prototype, "username", void 0);
    return OrgsSetMembershipForUserPathParams;
}(utils_1.SpeakeasyBase));
exports.OrgsSetMembershipForUserPathParams = OrgsSetMembershipForUserPathParams;
var OrgsSetMembershipForUserRequestBodyRoleEnum;
(function (OrgsSetMembershipForUserRequestBodyRoleEnum) {
    OrgsSetMembershipForUserRequestBodyRoleEnum["Admin"] = "admin";
    OrgsSetMembershipForUserRequestBodyRoleEnum["Member"] = "member";
})(OrgsSetMembershipForUserRequestBodyRoleEnum = exports.OrgsSetMembershipForUserRequestBodyRoleEnum || (exports.OrgsSetMembershipForUserRequestBodyRoleEnum = {}));
var OrgsSetMembershipForUserRequestBody = /** @class */ (function (_super) {
    __extends(OrgsSetMembershipForUserRequestBody, _super);
    function OrgsSetMembershipForUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], OrgsSetMembershipForUserRequestBody.prototype, "role", void 0);
    return OrgsSetMembershipForUserRequestBody;
}(utils_1.SpeakeasyBase));
exports.OrgsSetMembershipForUserRequestBody = OrgsSetMembershipForUserRequestBody;
var OrgsSetMembershipForUserRequest = /** @class */ (function (_super) {
    __extends(OrgsSetMembershipForUserRequest, _super);
    function OrgsSetMembershipForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OrgsSetMembershipForUserPathParams)
    ], OrgsSetMembershipForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", OrgsSetMembershipForUserRequestBody)
    ], OrgsSetMembershipForUserRequest.prototype, "request", void 0);
    return OrgsSetMembershipForUserRequest;
}(utils_1.SpeakeasyBase));
exports.OrgsSetMembershipForUserRequest = OrgsSetMembershipForUserRequest;
var OrgsSetMembershipForUserResponse = /** @class */ (function (_super) {
    __extends(OrgsSetMembershipForUserResponse, _super);
    function OrgsSetMembershipForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], OrgsSetMembershipForUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], OrgsSetMembershipForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], OrgsSetMembershipForUserResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.OrgMembership)
    ], OrgsSetMembershipForUserResponse.prototype, "orgMembership", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], OrgsSetMembershipForUserResponse.prototype, "validationError", void 0);
    return OrgsSetMembershipForUserResponse;
}(utils_1.SpeakeasyBase));
exports.OrgsSetMembershipForUserResponse = OrgsSetMembershipForUserResponse;
