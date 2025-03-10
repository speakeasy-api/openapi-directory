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
exports.GETDetachVerifiedAccessTrustProviderResponse = exports.GETDetachVerifiedAccessTrustProviderRequest = exports.GETDetachVerifiedAccessTrustProviderVersionEnum = exports.GETDetachVerifiedAccessTrustProviderActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GETDetachVerifiedAccessTrustProviderActionEnum;
(function (GETDetachVerifiedAccessTrustProviderActionEnum) {
    GETDetachVerifiedAccessTrustProviderActionEnum["DetachVerifiedAccessTrustProvider"] = "DetachVerifiedAccessTrustProvider";
})(GETDetachVerifiedAccessTrustProviderActionEnum = exports.GETDetachVerifiedAccessTrustProviderActionEnum || (exports.GETDetachVerifiedAccessTrustProviderActionEnum = {}));
var GETDetachVerifiedAccessTrustProviderVersionEnum;
(function (GETDetachVerifiedAccessTrustProviderVersionEnum) {
    GETDetachVerifiedAccessTrustProviderVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GETDetachVerifiedAccessTrustProviderVersionEnum = exports.GETDetachVerifiedAccessTrustProviderVersionEnum || (exports.GETDetachVerifiedAccessTrustProviderVersionEnum = {}));
var GETDetachVerifiedAccessTrustProviderRequest = /** @class */ (function (_super) {
    __extends(GETDetachVerifiedAccessTrustProviderRequest, _super);
    function GETDetachVerifiedAccessTrustProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=Action",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=ClientToken",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=DryRun",
        }),
        __metadata("design:type", Boolean)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=VerifiedAccessInstanceId",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "verifiedAccessInstanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=VerifiedAccessTrustProviderId",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "verifiedAccessTrustProviderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=Version",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderRequest.prototype, "xAmzSignedHeaders", void 0);
    return GETDetachVerifiedAccessTrustProviderRequest;
}(utils_1.SpeakeasyBase));
exports.GETDetachVerifiedAccessTrustProviderRequest = GETDetachVerifiedAccessTrustProviderRequest;
var GETDetachVerifiedAccessTrustProviderResponse = /** @class */ (function (_super) {
    __extends(GETDetachVerifiedAccessTrustProviderResponse, _super);
    function GETDetachVerifiedAccessTrustProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GETDetachVerifiedAccessTrustProviderResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GETDetachVerifiedAccessTrustProviderResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GETDetachVerifiedAccessTrustProviderResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GETDetachVerifiedAccessTrustProviderResponse.prototype, "rawResponse", void 0);
    return GETDetachVerifiedAccessTrustProviderResponse;
}(utils_1.SpeakeasyBase));
exports.GETDetachVerifiedAccessTrustProviderResponse = GETDetachVerifiedAccessTrustProviderResponse;
