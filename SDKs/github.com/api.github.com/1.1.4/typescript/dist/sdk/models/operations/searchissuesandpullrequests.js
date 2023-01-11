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
exports.SearchIssuesAndPullRequestsResponse = exports.SearchIssuesAndPullRequestsRequest = exports.SearchIssuesAndPullRequests503ApplicationJson = exports.SearchIssuesAndPullRequests200ApplicationJson = exports.SearchIssuesAndPullRequestsQueryParams = exports.SearchIssuesAndPullRequestsSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SearchIssuesAndPullRequestsSortEnum;
(function (SearchIssuesAndPullRequestsSortEnum) {
    SearchIssuesAndPullRequestsSortEnum["Comments"] = "comments";
    SearchIssuesAndPullRequestsSortEnum["Reactions"] = "reactions";
    SearchIssuesAndPullRequestsSortEnum["ReactionsPlus1"] = "reactions-+1";
    SearchIssuesAndPullRequestsSortEnum["Reactions1"] = "reactions--1";
    SearchIssuesAndPullRequestsSortEnum["ReactionsSmile"] = "reactions-smile";
    SearchIssuesAndPullRequestsSortEnum["ReactionsThinkingFace"] = "reactions-thinking_face";
    SearchIssuesAndPullRequestsSortEnum["ReactionsHeart"] = "reactions-heart";
    SearchIssuesAndPullRequestsSortEnum["ReactionsTada"] = "reactions-tada";
    SearchIssuesAndPullRequestsSortEnum["Interactions"] = "interactions";
    SearchIssuesAndPullRequestsSortEnum["Created"] = "created";
    SearchIssuesAndPullRequestsSortEnum["Updated"] = "updated";
})(SearchIssuesAndPullRequestsSortEnum = exports.SearchIssuesAndPullRequestsSortEnum || (exports.SearchIssuesAndPullRequestsSortEnum = {}));
var SearchIssuesAndPullRequestsQueryParams = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequestsQueryParams, _super);
    function SearchIssuesAndPullRequestsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequestsQueryParams.prototype, "sort", void 0);
    return SearchIssuesAndPullRequestsQueryParams;
}(utils_1.SpeakeasyBase));
exports.SearchIssuesAndPullRequestsQueryParams = SearchIssuesAndPullRequestsQueryParams;
var SearchIssuesAndPullRequests200ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequests200ApplicationJson, _super);
    function SearchIssuesAndPullRequests200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=incomplete_results" }),
        __metadata("design:type", Boolean)
    ], SearchIssuesAndPullRequests200ApplicationJson.prototype, "incompleteResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shared.IssueSearchResultItem }),
        __metadata("design:type", Array)
    ], SearchIssuesAndPullRequests200ApplicationJson.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], SearchIssuesAndPullRequests200ApplicationJson.prototype, "totalCount", void 0);
    return SearchIssuesAndPullRequests200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SearchIssuesAndPullRequests200ApplicationJson = SearchIssuesAndPullRequests200ApplicationJson;
var SearchIssuesAndPullRequests503ApplicationJson = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequests503ApplicationJson, _super);
    function SearchIssuesAndPullRequests503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequests503ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequests503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequests503ApplicationJson.prototype, "message", void 0);
    return SearchIssuesAndPullRequests503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SearchIssuesAndPullRequests503ApplicationJson = SearchIssuesAndPullRequests503ApplicationJson;
var SearchIssuesAndPullRequestsRequest = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequestsRequest, _super);
    function SearchIssuesAndPullRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchIssuesAndPullRequestsQueryParams)
    ], SearchIssuesAndPullRequestsRequest.prototype, "queryParams", void 0);
    return SearchIssuesAndPullRequestsRequest;
}(utils_1.SpeakeasyBase));
exports.SearchIssuesAndPullRequestsRequest = SearchIssuesAndPullRequestsRequest;
var SearchIssuesAndPullRequestsResponse = /** @class */ (function (_super) {
    __extends(SearchIssuesAndPullRequestsResponse, _super);
    function SearchIssuesAndPullRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SearchIssuesAndPullRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SearchIssuesAndPullRequestsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], SearchIssuesAndPullRequestsResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchIssuesAndPullRequests200ApplicationJson)
    ], SearchIssuesAndPullRequestsResponse.prototype, "searchIssuesAndPullRequests200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SearchIssuesAndPullRequests503ApplicationJson)
    ], SearchIssuesAndPullRequestsResponse.prototype, "searchIssuesAndPullRequests503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], SearchIssuesAndPullRequestsResponse.prototype, "validationError", void 0);
    return SearchIssuesAndPullRequestsResponse;
}(utils_1.SpeakeasyBase));
exports.SearchIssuesAndPullRequestsResponse = SearchIssuesAndPullRequestsResponse;
