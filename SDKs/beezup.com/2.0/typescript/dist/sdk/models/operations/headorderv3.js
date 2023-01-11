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
exports.HeadOrderV3Response = exports.HeadOrderV3Request = exports.HeadOrderV3Headers = exports.HeadOrderV3PathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var HeadOrderV3PathParams = /** @class */ (function (_super) {
    __extends(HeadOrderV3PathParams, _super);
    function HeadOrderV3PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", Number)
    ], HeadOrderV3PathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=beezUPOrderId" }),
        __metadata("design:type", String)
    ], HeadOrderV3PathParams.prototype, "beezUPOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" }),
        __metadata("design:type", String)
    ], HeadOrderV3PathParams.prototype, "marketplaceTechnicalCode", void 0);
    return HeadOrderV3PathParams;
}(utils_1.SpeakeasyBase));
exports.HeadOrderV3PathParams = HeadOrderV3PathParams;
var HeadOrderV3Headers = /** @class */ (function (_super) {
    __extends(HeadOrderV3Headers, _super);
    function HeadOrderV3Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], HeadOrderV3Headers.prototype, "ifNoneMatch", void 0);
    return HeadOrderV3Headers;
}(utils_1.SpeakeasyBase));
exports.HeadOrderV3Headers = HeadOrderV3Headers;
var HeadOrderV3Request = /** @class */ (function (_super) {
    __extends(HeadOrderV3Request, _super);
    function HeadOrderV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", HeadOrderV3PathParams)
    ], HeadOrderV3Request.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", HeadOrderV3Headers)
    ], HeadOrderV3Request.prototype, "headers", void 0);
    return HeadOrderV3Request;
}(utils_1.SpeakeasyBase));
exports.HeadOrderV3Request = HeadOrderV3Request;
var HeadOrderV3Response = /** @class */ (function (_super) {
    __extends(HeadOrderV3Response, _super);
    function HeadOrderV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BeezUpCommonErrorResponseMessage)
    ], HeadOrderV3Response.prototype, "beezUPCommonErrorResponseMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], HeadOrderV3Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], HeadOrderV3Response.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], HeadOrderV3Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseMessage)
    ], HeadOrderV3Response.prototype, "errorResponseMessage", void 0);
    return HeadOrderV3Response;
}(utils_1.SpeakeasyBase));
exports.HeadOrderV3Response = HeadOrderV3Response;
