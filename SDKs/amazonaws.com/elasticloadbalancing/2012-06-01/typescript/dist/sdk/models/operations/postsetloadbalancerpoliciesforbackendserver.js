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
exports.PostSetLoadBalancerPoliciesForBackendServerResponse = exports.PostSetLoadBalancerPoliciesForBackendServerRequest = exports.PostSetLoadBalancerPoliciesForBackendServerHeaders = exports.PostSetLoadBalancerPoliciesForBackendServerQueryParams = exports.PostSetLoadBalancerPoliciesForBackendServerVersionEnum = exports.PostSetLoadBalancerPoliciesForBackendServerActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostSetLoadBalancerPoliciesForBackendServerActionEnum;
(function (PostSetLoadBalancerPoliciesForBackendServerActionEnum) {
    PostSetLoadBalancerPoliciesForBackendServerActionEnum["SetLoadBalancerPoliciesForBackendServer"] = "SetLoadBalancerPoliciesForBackendServer";
})(PostSetLoadBalancerPoliciesForBackendServerActionEnum = exports.PostSetLoadBalancerPoliciesForBackendServerActionEnum || (exports.PostSetLoadBalancerPoliciesForBackendServerActionEnum = {}));
var PostSetLoadBalancerPoliciesForBackendServerVersionEnum;
(function (PostSetLoadBalancerPoliciesForBackendServerVersionEnum) {
    PostSetLoadBalancerPoliciesForBackendServerVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostSetLoadBalancerPoliciesForBackendServerVersionEnum = exports.PostSetLoadBalancerPoliciesForBackendServerVersionEnum || (exports.PostSetLoadBalancerPoliciesForBackendServerVersionEnum = {}));
var PostSetLoadBalancerPoliciesForBackendServerQueryParams = /** @class */ (function (_super) {
    __extends(PostSetLoadBalancerPoliciesForBackendServerQueryParams, _super);
    function PostSetLoadBalancerPoliciesForBackendServerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerQueryParams.prototype, "version", void 0);
    return PostSetLoadBalancerPoliciesForBackendServerQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostSetLoadBalancerPoliciesForBackendServerQueryParams = PostSetLoadBalancerPoliciesForBackendServerQueryParams;
var PostSetLoadBalancerPoliciesForBackendServerHeaders = /** @class */ (function (_super) {
    __extends(PostSetLoadBalancerPoliciesForBackendServerHeaders, _super);
    function PostSetLoadBalancerPoliciesForBackendServerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSetLoadBalancerPoliciesForBackendServerHeaders;
}(utils_1.SpeakeasyBase));
exports.PostSetLoadBalancerPoliciesForBackendServerHeaders = PostSetLoadBalancerPoliciesForBackendServerHeaders;
var PostSetLoadBalancerPoliciesForBackendServerRequest = /** @class */ (function (_super) {
    __extends(PostSetLoadBalancerPoliciesForBackendServerRequest, _super);
    function PostSetLoadBalancerPoliciesForBackendServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetLoadBalancerPoliciesForBackendServerQueryParams)
    ], PostSetLoadBalancerPoliciesForBackendServerRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetLoadBalancerPoliciesForBackendServerHeaders)
    ], PostSetLoadBalancerPoliciesForBackendServerRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSetLoadBalancerPoliciesForBackendServerRequest.prototype, "request", void 0);
    return PostSetLoadBalancerPoliciesForBackendServerRequest;
}(utils_1.SpeakeasyBase));
exports.PostSetLoadBalancerPoliciesForBackendServerRequest = PostSetLoadBalancerPoliciesForBackendServerRequest;
var PostSetLoadBalancerPoliciesForBackendServerResponse = /** @class */ (function (_super) {
    __extends(PostSetLoadBalancerPoliciesForBackendServerResponse, _super);
    function PostSetLoadBalancerPoliciesForBackendServerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostSetLoadBalancerPoliciesForBackendServerResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSetLoadBalancerPoliciesForBackendServerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSetLoadBalancerPoliciesForBackendServerResponse.prototype, "statusCode", void 0);
    return PostSetLoadBalancerPoliciesForBackendServerResponse;
}(utils_1.SpeakeasyBase));
exports.PostSetLoadBalancerPoliciesForBackendServerResponse = PostSetLoadBalancerPoliciesForBackendServerResponse;
