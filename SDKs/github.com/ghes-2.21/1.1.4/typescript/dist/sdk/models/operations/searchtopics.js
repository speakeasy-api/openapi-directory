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
exports.SearchTopicsResponse = exports.SearchTopicsRequest = exports.SearchTopics415ApplicationJson = exports.SearchTopics200ApplicationJson = exports.SearchTopicsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SearchTopicsQueryParams = /** @class */ (function (_super) {
    __extends(SearchTopicsQueryParams, _super);
    function SearchTopicsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchTopicsQueryParams.prototype, "q", void 0);
    return SearchTopicsQueryParams;
}(utils_1.SpeakeasyBase));
exports.SearchTopicsQueryParams = SearchTopicsQueryParams;
var SearchTopics200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchTopics200ApplicationJson, _super);
    function SearchTopics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=incomplete_results" }),
        __metadata("design:type", Boolean)
    ], SearchTopics200ApplicationJson.prototype, "incompleteResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shared.TopicSearchResultItem }),
        __metadata("design:type", Array)
    ], SearchTopics200ApplicationJson.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], SearchTopics200ApplicationJson.prototype, "totalCount", void 0);
    return SearchTopics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SearchTopics200ApplicationJson = SearchTopics200ApplicationJson;
var SearchTopics415ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchTopics415ApplicationJson, _super);
    function SearchTopics415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SearchTopics415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SearchTopics415ApplicationJson.prototype, "message", void 0);
    return SearchTopics415ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SearchTopics415ApplicationJson = SearchTopics415ApplicationJson;
var SearchTopicsRequest = /** @class */ (function (_super) {
    __extends(SearchTopicsRequest, _super);
    function SearchTopicsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchTopicsQueryParams)
    ], SearchTopicsRequest.prototype, "queryParams", void 0);
    return SearchTopicsRequest;
}(utils_1.SpeakeasyBase));
exports.SearchTopicsRequest = SearchTopicsRequest;
var SearchTopicsResponse = /** @class */ (function (_super) {
    __extends(SearchTopicsResponse, _super);
    function SearchTopicsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SearchTopicsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SearchTopicsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchTopics200ApplicationJson)
    ], SearchTopicsResponse.prototype, "searchTopics200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchTopics415ApplicationJson)
    ], SearchTopicsResponse.prototype, "searchTopics415ApplicationJSONObject", void 0);
    return SearchTopicsResponse;
}(utils_1.SpeakeasyBase));
exports.SearchTopicsResponse = SearchTopicsResponse;
