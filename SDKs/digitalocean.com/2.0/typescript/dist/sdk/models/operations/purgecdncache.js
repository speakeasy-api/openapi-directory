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
exports.PurgeCdnCacheResponse = exports.PurgeCdnCacheRequest = exports.PurgeCdnCache401ApplicationJson = exports.PurgeCdnCacheRequestBody = exports.PurgeCdnCachePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PurgeCdnCachePathParams = /** @class */ (function (_super) {
    __extends(PurgeCdnCachePathParams, _super);
    function PurgeCdnCachePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cdn_id" }),
        __metadata("design:type", String)
    ], PurgeCdnCachePathParams.prototype, "cdnId", void 0);
    return PurgeCdnCachePathParams;
}(utils_1.SpeakeasyBase));
exports.PurgeCdnCachePathParams = PurgeCdnCachePathParams;
var PurgeCdnCacheRequestBody = /** @class */ (function (_super) {
    __extends(PurgeCdnCacheRequestBody, _super);
    function PurgeCdnCacheRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files" }),
        __metadata("design:type", Array)
    ], PurgeCdnCacheRequestBody.prototype, "files", void 0);
    return PurgeCdnCacheRequestBody;
}(utils_1.SpeakeasyBase));
exports.PurgeCdnCacheRequestBody = PurgeCdnCacheRequestBody;
var PurgeCdnCache401ApplicationJson = /** @class */ (function (_super) {
    __extends(PurgeCdnCache401ApplicationJson, _super);
    function PurgeCdnCache401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PurgeCdnCache401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PurgeCdnCache401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], PurgeCdnCache401ApplicationJson.prototype, "requestId", void 0);
    return PurgeCdnCache401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PurgeCdnCache401ApplicationJson = PurgeCdnCache401ApplicationJson;
var PurgeCdnCacheRequest = /** @class */ (function (_super) {
    __extends(PurgeCdnCacheRequest, _super);
    function PurgeCdnCacheRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PurgeCdnCachePathParams)
    ], PurgeCdnCacheRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PurgeCdnCacheRequestBody)
    ], PurgeCdnCacheRequest.prototype, "request", void 0);
    return PurgeCdnCacheRequest;
}(utils_1.SpeakeasyBase));
exports.PurgeCdnCacheRequest = PurgeCdnCacheRequest;
var PurgeCdnCacheResponse = /** @class */ (function (_super) {
    __extends(PurgeCdnCacheResponse, _super);
    function PurgeCdnCacheResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PurgeCdnCacheResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PurgeCdnCacheResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PurgeCdnCacheResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PurgeCdnCache401ApplicationJson)
    ], PurgeCdnCacheResponse.prototype, "purgeCdnCache401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], PurgeCdnCacheResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return PurgeCdnCacheResponse;
}(utils_1.SpeakeasyBase));
exports.PurgeCdnCacheResponse = PurgeCdnCacheResponse;
