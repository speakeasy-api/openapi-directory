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
exports.UpdateStreamingDistribution20190326Response = exports.UpdateStreamingDistribution20190326Request = exports.UpdateStreamingDistribution20190326Headers = exports.UpdateStreamingDistribution20190326PathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateStreamingDistribution20190326PathParams = /** @class */ (function (_super) {
    __extends(UpdateStreamingDistribution20190326PathParams, _super);
    function UpdateStreamingDistribution20190326PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Id" }),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326PathParams.prototype, "id", void 0);
    return UpdateStreamingDistribution20190326PathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateStreamingDistribution20190326PathParams = UpdateStreamingDistribution20190326PathParams;
var UpdateStreamingDistribution20190326Headers = /** @class */ (function (_super) {
    __extends(UpdateStreamingDistribution20190326Headers, _super);
    function UpdateStreamingDistribution20190326Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326Headers.prototype, "ifMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326Headers.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326Headers.prototype, "xAmzSignedHeaders", void 0);
    return UpdateStreamingDistribution20190326Headers;
}(utils_1.SpeakeasyBase));
exports.UpdateStreamingDistribution20190326Headers = UpdateStreamingDistribution20190326Headers;
var UpdateStreamingDistribution20190326Request = /** @class */ (function (_super) {
    __extends(UpdateStreamingDistribution20190326Request, _super);
    function UpdateStreamingDistribution20190326Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateStreamingDistribution20190326PathParams)
    ], UpdateStreamingDistribution20190326Request.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateStreamingDistribution20190326Headers)
    ], UpdateStreamingDistribution20190326Request.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateStreamingDistribution20190326Request.prototype, "request", void 0);
    return UpdateStreamingDistribution20190326Request;
}(utils_1.SpeakeasyBase));
exports.UpdateStreamingDistribution20190326Request = UpdateStreamingDistribution20190326Request;
var UpdateStreamingDistribution20190326Response = /** @class */ (function (_super) {
    __extends(UpdateStreamingDistribution20190326Response, _super);
    function UpdateStreamingDistribution20190326Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateStreamingDistribution20190326Response.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateStreamingDistribution20190326Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateStreamingDistribution20190326Response.prototype, "statusCode", void 0);
    return UpdateStreamingDistribution20190326Response;
}(utils_1.SpeakeasyBase));
exports.UpdateStreamingDistribution20190326Response = UpdateStreamingDistribution20190326Response;
