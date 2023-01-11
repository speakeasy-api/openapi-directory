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
exports.PostEnableAlarmActionsResponse = exports.PostEnableAlarmActionsRequest = exports.PostEnableAlarmActionsHeaders = exports.PostEnableAlarmActionsQueryParams = exports.PostEnableAlarmActionsVersionEnum = exports.PostEnableAlarmActionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostEnableAlarmActionsActionEnum;
(function (PostEnableAlarmActionsActionEnum) {
    PostEnableAlarmActionsActionEnum["EnableAlarmActions"] = "EnableAlarmActions";
})(PostEnableAlarmActionsActionEnum = exports.PostEnableAlarmActionsActionEnum || (exports.PostEnableAlarmActionsActionEnum = {}));
var PostEnableAlarmActionsVersionEnum;
(function (PostEnableAlarmActionsVersionEnum) {
    PostEnableAlarmActionsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostEnableAlarmActionsVersionEnum = exports.PostEnableAlarmActionsVersionEnum || (exports.PostEnableAlarmActionsVersionEnum = {}));
var PostEnableAlarmActionsQueryParams = /** @class */ (function (_super) {
    __extends(PostEnableAlarmActionsQueryParams, _super);
    function PostEnableAlarmActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsQueryParams.prototype, "version", void 0);
    return PostEnableAlarmActionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostEnableAlarmActionsQueryParams = PostEnableAlarmActionsQueryParams;
var PostEnableAlarmActionsHeaders = /** @class */ (function (_super) {
    __extends(PostEnableAlarmActionsHeaders, _super);
    function PostEnableAlarmActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostEnableAlarmActionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostEnableAlarmActionsHeaders = PostEnableAlarmActionsHeaders;
var PostEnableAlarmActionsRequest = /** @class */ (function (_super) {
    __extends(PostEnableAlarmActionsRequest, _super);
    function PostEnableAlarmActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnableAlarmActionsQueryParams)
    ], PostEnableAlarmActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnableAlarmActionsHeaders)
    ], PostEnableAlarmActionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostEnableAlarmActionsRequest.prototype, "request", void 0);
    return PostEnableAlarmActionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostEnableAlarmActionsRequest = PostEnableAlarmActionsRequest;
var PostEnableAlarmActionsResponse = /** @class */ (function (_super) {
    __extends(PostEnableAlarmActionsResponse, _super);
    function PostEnableAlarmActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostEnableAlarmActionsResponse.prototype, "statusCode", void 0);
    return PostEnableAlarmActionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostEnableAlarmActionsResponse = PostEnableAlarmActionsResponse;
