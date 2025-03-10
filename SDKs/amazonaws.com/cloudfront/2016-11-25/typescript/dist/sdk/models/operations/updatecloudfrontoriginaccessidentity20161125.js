"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.UpdateCloudFrontOriginAccessIdentity20161125Response = exports.UpdateCloudFrontOriginAccessIdentity20161125Request = exports.UpdateCloudFrontOriginAccessIdentity20161125RequestBody = exports.UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig = void 0;
var utils_1 = require("../../../internal/utils");
/**
 * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
 */
var UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig = /** @class */ (function (_super) {
    __extends(UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig, _super);
    function UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig.prototype, "callerReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig.prototype, "comment", void 0);
    return UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig = UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig;
var UpdateCloudFrontOriginAccessIdentity20161125RequestBody = /** @class */ (function (_super) {
    __extends(UpdateCloudFrontOriginAccessIdentity20161125RequestBody, _super);
    function UpdateCloudFrontOriginAccessIdentity20161125RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCloudFrontOriginAccessIdentity20161125RequestBodyCloudFrontOriginAccessIdentityConfig)
    ], UpdateCloudFrontOriginAccessIdentity20161125RequestBody.prototype, "cloudFrontOriginAccessIdentityConfig", void 0);
    return UpdateCloudFrontOriginAccessIdentity20161125RequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateCloudFrontOriginAccessIdentity20161125RequestBody = UpdateCloudFrontOriginAccessIdentity20161125RequestBody;
var UpdateCloudFrontOriginAccessIdentity20161125Request = /** @class */ (function (_super) {
    __extends(UpdateCloudFrontOriginAccessIdentity20161125Request, _super);
    function UpdateCloudFrontOriginAccessIdentity20161125Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Id" }),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=If-Match",
        }),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "ifMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Request.prototype, "xAmzSignedHeaders", void 0);
    return UpdateCloudFrontOriginAccessIdentity20161125Request;
}(utils_1.SpeakeasyBase));
exports.UpdateCloudFrontOriginAccessIdentity20161125Request = UpdateCloudFrontOriginAccessIdentity20161125Request;
var UpdateCloudFrontOriginAccessIdentity20161125Response = /** @class */ (function (_super) {
    __extends(UpdateCloudFrontOriginAccessIdentity20161125Response, _super);
    function UpdateCloudFrontOriginAccessIdentity20161125Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateCloudFrontOriginAccessIdentity20161125Response.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateCloudFrontOriginAccessIdentity20161125Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateCloudFrontOriginAccessIdentity20161125Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateCloudFrontOriginAccessIdentity20161125Response.prototype, "rawResponse", void 0);
    return UpdateCloudFrontOriginAccessIdentity20161125Response;
}(utils_1.SpeakeasyBase));
exports.UpdateCloudFrontOriginAccessIdentity20161125Response = UpdateCloudFrontOriginAccessIdentity20161125Response;
