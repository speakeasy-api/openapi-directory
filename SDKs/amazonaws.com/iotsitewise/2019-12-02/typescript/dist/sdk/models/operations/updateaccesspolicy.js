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
exports.UpdateAccessPolicyResponse = exports.UpdateAccessPolicyRequest = exports.UpdateAccessPolicyRequestBody = exports.UpdateAccessPolicyRequestBodyAccessPolicyResource = exports.UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum = exports.UpdateAccessPolicyRequestBodyAccessPolicyIdentity = exports.UpdateAccessPolicyHeaders = exports.UpdateAccessPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateAccessPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateAccessPolicyPathParams, _super);
    function UpdateAccessPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accessPolicyId" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyPathParams.prototype, "accessPolicyId", void 0);
    return UpdateAccessPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateAccessPolicyPathParams = UpdateAccessPolicyPathParams;
var UpdateAccessPolicyHeaders = /** @class */ (function (_super) {
    __extends(UpdateAccessPolicyHeaders, _super);
    function UpdateAccessPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAccessPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateAccessPolicyHeaders = UpdateAccessPolicyHeaders;
// UpdateAccessPolicyRequestBodyAccessPolicyIdentity
/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
**/
var UpdateAccessPolicyRequestBodyAccessPolicyIdentity = /** @class */ (function (_super) {
    __extends(UpdateAccessPolicyRequestBodyAccessPolicyIdentity, _super);
    function UpdateAccessPolicyRequestBodyAccessPolicyIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group" }),
        __metadata("design:type", shared.GroupIdentity)
    ], UpdateAccessPolicyRequestBodyAccessPolicyIdentity.prototype, "group", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamRole" }),
        __metadata("design:type", shared.IamRoleIdentity)
    ], UpdateAccessPolicyRequestBodyAccessPolicyIdentity.prototype, "iamRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamUser" }),
        __metadata("design:type", shared.IamUserIdentity)
    ], UpdateAccessPolicyRequestBodyAccessPolicyIdentity.prototype, "iamUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", shared.UserIdentity)
    ], UpdateAccessPolicyRequestBodyAccessPolicyIdentity.prototype, "user", void 0);
    return UpdateAccessPolicyRequestBodyAccessPolicyIdentity;
}(utils_1.SpeakeasyBase));
exports.UpdateAccessPolicyRequestBodyAccessPolicyIdentity = UpdateAccessPolicyRequestBodyAccessPolicyIdentity;
var UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
(function (UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum) {
    UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum["Administrator"] = "ADMINISTRATOR";
    UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum["Viewer"] = "VIEWER";
})(UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum = exports.UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum || (exports.UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum = {}));
// UpdateAccessPolicyRequestBodyAccessPolicyResource
/**
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
var UpdateAccessPolicyRequestBodyAccessPolicyResource = /** @class */ (function (_super) {
    __extends(UpdateAccessPolicyRequestBodyAccessPolicyResource, _super);
    function UpdateAccessPolicyRequestBodyAccessPolicyResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portal" }),
        __metadata("design:type", shared.PortalResource)
    ], UpdateAccessPolicyRequestBodyAccessPolicyResource.prototype, "portal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project" }),
        __metadata("design:type", shared.ProjectResource)
    ], UpdateAccessPolicyRequestBodyAccessPolicyResource.prototype, "project", void 0);
    return UpdateAccessPolicyRequestBodyAccessPolicyResource;
}(utils_1.SpeakeasyBase));
exports.UpdateAccessPolicyRequestBodyAccessPolicyResource = UpdateAccessPolicyRequestBodyAccessPolicyResource;
var UpdateAccessPolicyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAccessPolicyRequestBody, _super);
    function UpdateAccessPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessPolicyIdentity" }),
        __metadata("design:type", UpdateAccessPolicyRequestBodyAccessPolicyIdentity)
    ], UpdateAccessPolicyRequestBody.prototype, "accessPolicyIdentity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessPolicyPermission" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyRequestBody.prototype, "accessPolicyPermission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessPolicyResource" }),
        __metadata("design:type", UpdateAccessPolicyRequestBodyAccessPolicyResource)
    ], UpdateAccessPolicyRequestBody.prototype, "accessPolicyResource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateAccessPolicyRequestBody.prototype, "clientToken", void 0);
    return UpdateAccessPolicyRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateAccessPolicyRequestBody = UpdateAccessPolicyRequestBody;
var UpdateAccessPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateAccessPolicyRequest, _super);
    function UpdateAccessPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAccessPolicyPathParams)
    ], UpdateAccessPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAccessPolicyHeaders)
    ], UpdateAccessPolicyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAccessPolicyRequestBody)
    ], UpdateAccessPolicyRequest.prototype, "request", void 0);
    return UpdateAccessPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateAccessPolicyRequest = UpdateAccessPolicyRequest;
var UpdateAccessPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateAccessPolicyResponse, _super);
    function UpdateAccessPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateAccessPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAccessPolicyResponse.prototype, "internalFailureException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAccessPolicyResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAccessPolicyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateAccessPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAccessPolicyResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateAccessPolicyResponse.prototype, "updateAccessPolicyResponse", void 0);
    return UpdateAccessPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateAccessPolicyResponse = UpdateAccessPolicyResponse;
