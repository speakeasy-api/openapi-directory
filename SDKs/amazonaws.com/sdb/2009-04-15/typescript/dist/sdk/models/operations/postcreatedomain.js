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
exports.PostCreateDomainResponse = exports.PostCreateDomainRequest = exports.PostCreateDomainQueryParams = exports.PostCreateDomainVersionEnum = exports.PostCreateDomainActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateDomainActionEnum;
(function (PostCreateDomainActionEnum) {
    PostCreateDomainActionEnum["CreateDomain"] = "CreateDomain";
})(PostCreateDomainActionEnum = exports.PostCreateDomainActionEnum || (exports.PostCreateDomainActionEnum = {}));
var PostCreateDomainVersionEnum;
(function (PostCreateDomainVersionEnum) {
    PostCreateDomainVersionEnum["TwoThousandAndNine0415"] = "2009-04-15";
})(PostCreateDomainVersionEnum = exports.PostCreateDomainVersionEnum || (exports.PostCreateDomainVersionEnum = {}));
var PostCreateDomainQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateDomainQueryParams, _super);
    function PostCreateDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], PostCreateDomainQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateDomainQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], PostCreateDomainQueryParams.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], PostCreateDomainQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], PostCreateDomainQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], PostCreateDomainQueryParams.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateDomainQueryParams.prototype, "version", void 0);
    return PostCreateDomainQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateDomainQueryParams = PostCreateDomainQueryParams;
var PostCreateDomainRequest = /** @class */ (function (_super) {
    __extends(PostCreateDomainRequest, _super);
    function PostCreateDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateDomainQueryParams)
    ], PostCreateDomainRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateDomainRequest.prototype, "request", void 0);
    return PostCreateDomainRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateDomainRequest = PostCreateDomainRequest;
var PostCreateDomainResponse = /** @class */ (function (_super) {
    __extends(PostCreateDomainResponse, _super);
    function PostCreateDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateDomainResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateDomainResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateDomainResponse.prototype, "statusCode", void 0);
    return PostCreateDomainResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateDomainResponse = PostCreateDomainResponse;
