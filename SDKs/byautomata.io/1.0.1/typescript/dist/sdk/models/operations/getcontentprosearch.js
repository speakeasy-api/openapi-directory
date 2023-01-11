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
exports.GetContentproSearchResponse = exports.GetContentproSearchRequest = exports.GetContentproSearch200ApplicationJson = exports.GetContentproSearch200ApplicationJsonData = exports.GetContentproSearchQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetContentproSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetContentproSearchQueryParams, _super);
    function GetContentproSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=terms" }),
        __metadata("design:type", String)
    ], GetContentproSearchQueryParams.prototype, "terms", void 0);
    return GetContentproSearchQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetContentproSearchQueryParams = GetContentproSearchQueryParams;
var GetContentproSearch200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetContentproSearch200ApplicationJsonData, _super);
    function GetContentproSearch200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=article" }),
        __metadata("design:type", shared.Article)
    ], GetContentproSearch200ApplicationJsonData.prototype, "article", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company" }),
        __metadata("design:type", shared.ContentProCompany)
    ], GetContentproSearch200ApplicationJsonData.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snippets" }),
        __metadata("design:type", shared.ContentProSnippets)
    ], GetContentproSearch200ApplicationJsonData.prototype, "snippets", void 0);
    return GetContentproSearch200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetContentproSearch200ApplicationJsonData = GetContentproSearch200ApplicationJsonData;
var GetContentproSearch200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetContentproSearch200ApplicationJson, _super);
    function GetContentproSearch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calls_per_month" }),
        __metadata("design:type", String)
    ], GetContentproSearch200ApplicationJson.prototype, "callsPerMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count_remaining" }),
        __metadata("design:type", String)
    ], GetContentproSearch200ApplicationJson.prototype, "countRemaining", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: GetContentproSearch200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], GetContentproSearch200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewal_date" }),
        __metadata("design:type", String)
    ], GetContentproSearch200ApplicationJson.prototype, "renewalDate", void 0);
    return GetContentproSearch200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetContentproSearch200ApplicationJson = GetContentproSearch200ApplicationJson;
var GetContentproSearchRequest = /** @class */ (function (_super) {
    __extends(GetContentproSearchRequest, _super);
    function GetContentproSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetContentproSearchQueryParams)
    ], GetContentproSearchRequest.prototype, "queryParams", void 0);
    return GetContentproSearchRequest;
}(utils_1.SpeakeasyBase));
exports.GetContentproSearchRequest = GetContentproSearchRequest;
var GetContentproSearchResponse = /** @class */ (function (_super) {
    __extends(GetContentproSearchResponse, _super);
    function GetContentproSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetContentproSearchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetContentproSearchResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetContentproSearch200ApplicationJson)
    ], GetContentproSearchResponse.prototype, "getContentproSearch200ApplicationJSONObject", void 0);
    return GetContentproSearchResponse;
}(utils_1.SpeakeasyBase));
exports.GetContentproSearchResponse = GetContentproSearchResponse;
