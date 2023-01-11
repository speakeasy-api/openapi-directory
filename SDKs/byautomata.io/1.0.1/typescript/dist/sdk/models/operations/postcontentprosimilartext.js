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
exports.PostContentproSimilarTextResponse = exports.PostContentproSimilarTextRequest = exports.PostContentproSimilarText200ApplicationJson = exports.PostContentproSimilarText200ApplicationJsonData = exports.PostContentproSimilarTextRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostContentproSimilarTextRequestBody = /** @class */ (function (_super) {
    __extends(PostContentproSimilarTextRequestBody, _super);
    function PostContentproSimilarTextRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], PostContentproSimilarTextRequestBody.prototype, "text", void 0);
    return PostContentproSimilarTextRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostContentproSimilarTextRequestBody = PostContentproSimilarTextRequestBody;
var PostContentproSimilarText200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(PostContentproSimilarText200ApplicationJsonData, _super);
    function PostContentproSimilarText200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=article" }),
        __metadata("design:type", shared.Article)
    ], PostContentproSimilarText200ApplicationJsonData.prototype, "article", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company" }),
        __metadata("design:type", shared.ContentProCompany)
    ], PostContentproSimilarText200ApplicationJsonData.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snippets" }),
        __metadata("design:type", shared.ContentProSnippets)
    ], PostContentproSimilarText200ApplicationJsonData.prototype, "snippets", void 0);
    return PostContentproSimilarText200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.PostContentproSimilarText200ApplicationJsonData = PostContentproSimilarText200ApplicationJsonData;
var PostContentproSimilarText200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostContentproSimilarText200ApplicationJson, _super);
    function PostContentproSimilarText200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calls_per_month" }),
        __metadata("design:type", String)
    ], PostContentproSimilarText200ApplicationJson.prototype, "callsPerMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count_remaining" }),
        __metadata("design:type", String)
    ], PostContentproSimilarText200ApplicationJson.prototype, "countRemaining", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: PostContentproSimilarText200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], PostContentproSimilarText200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewal_date" }),
        __metadata("design:type", String)
    ], PostContentproSimilarText200ApplicationJson.prototype, "renewalDate", void 0);
    return PostContentproSimilarText200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostContentproSimilarText200ApplicationJson = PostContentproSimilarText200ApplicationJson;
var PostContentproSimilarTextRequest = /** @class */ (function (_super) {
    __extends(PostContentproSimilarTextRequest, _super);
    function PostContentproSimilarTextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostContentproSimilarTextRequestBody)
    ], PostContentproSimilarTextRequest.prototype, "request", void 0);
    return PostContentproSimilarTextRequest;
}(utils_1.SpeakeasyBase));
exports.PostContentproSimilarTextRequest = PostContentproSimilarTextRequest;
var PostContentproSimilarTextResponse = /** @class */ (function (_super) {
    __extends(PostContentproSimilarTextResponse, _super);
    function PostContentproSimilarTextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostContentproSimilarTextResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostContentproSimilarTextResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostContentproSimilarText200ApplicationJson)
    ], PostContentproSimilarTextResponse.prototype, "postContentproSimilarText200ApplicationJSONObject", void 0);
    return PostContentproSimilarTextResponse;
}(utils_1.SpeakeasyBase));
exports.PostContentproSimilarTextResponse = PostContentproSimilarTextResponse;
