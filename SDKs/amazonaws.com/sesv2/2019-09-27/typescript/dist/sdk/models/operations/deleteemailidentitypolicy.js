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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmailIdentityPolicyResponse = exports.DeleteEmailIdentityPolicyRequest = exports.DeleteEmailIdentityPolicyHeaders = exports.DeleteEmailIdentityPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteEmailIdentityPolicyPathParams = /** @class */ (function (_super) {
    __extends(DeleteEmailIdentityPolicyPathParams, _super);
    function DeleteEmailIdentityPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" }),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyPathParams.prototype, "emailIdentity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=PolicyName" }),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyPathParams.prototype, "policyName", void 0);
    return DeleteEmailIdentityPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteEmailIdentityPolicyPathParams = DeleteEmailIdentityPolicyPathParams;
var DeleteEmailIdentityPolicyHeaders = /** @class */ (function (_super) {
    __extends(DeleteEmailIdentityPolicyHeaders, _super);
    function DeleteEmailIdentityPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteEmailIdentityPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteEmailIdentityPolicyHeaders = DeleteEmailIdentityPolicyHeaders;
var DeleteEmailIdentityPolicyRequest = /** @class */ (function (_super) {
    __extends(DeleteEmailIdentityPolicyRequest, _super);
    function DeleteEmailIdentityPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteEmailIdentityPolicyPathParams)
    ], DeleteEmailIdentityPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteEmailIdentityPolicyHeaders)
    ], DeleteEmailIdentityPolicyRequest.prototype, "headers", void 0);
    return DeleteEmailIdentityPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteEmailIdentityPolicyRequest = DeleteEmailIdentityPolicyRequest;
var DeleteEmailIdentityPolicyResponse = /** @class */ (function (_super) {
    __extends(DeleteEmailIdentityPolicyResponse, _super);
    function DeleteEmailIdentityPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteEmailIdentityPolicyResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteEmailIdentityPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteEmailIdentityPolicyResponse.prototype, "deleteEmailIdentityPolicyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteEmailIdentityPolicyResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteEmailIdentityPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteEmailIdentityPolicyResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteEmailIdentityPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteEmailIdentityPolicyResponse = DeleteEmailIdentityPolicyResponse;
