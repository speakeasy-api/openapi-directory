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
exports.GetScoreCommentsResponse = exports.GetScoreCommentsRequest = exports.GetScoreCommentsSecurity = exports.GetScoreCommentsQueryParams = exports.GetScoreCommentsTypeEnum = exports.GetScoreCommentsSortEnum = exports.GetScoreCommentsDirectionEnum = exports.GetScoreCommentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetScoreCommentsPathParams = /** @class */ (function (_super) {
    __extends(GetScoreCommentsPathParams, _super);
    function GetScoreCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=score" }),
        __metadata("design:type", String)
    ], GetScoreCommentsPathParams.prototype, "score", void 0);
    return GetScoreCommentsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetScoreCommentsPathParams = GetScoreCommentsPathParams;
var GetScoreCommentsDirectionEnum;
(function (GetScoreCommentsDirectionEnum) {
    GetScoreCommentsDirectionEnum["Asc"] = "asc";
    GetScoreCommentsDirectionEnum["Desc"] = "desc";
})(GetScoreCommentsDirectionEnum = exports.GetScoreCommentsDirectionEnum || (exports.GetScoreCommentsDirectionEnum = {}));
var GetScoreCommentsSortEnum;
(function (GetScoreCommentsSortEnum) {
    GetScoreCommentsSortEnum["Date"] = "date";
})(GetScoreCommentsSortEnum = exports.GetScoreCommentsSortEnum || (exports.GetScoreCommentsSortEnum = {}));
var GetScoreCommentsTypeEnum;
(function (GetScoreCommentsTypeEnum) {
    GetScoreCommentsTypeEnum["Document"] = "document";
    GetScoreCommentsTypeEnum["Inline"] = "inline";
})(GetScoreCommentsTypeEnum = exports.GetScoreCommentsTypeEnum || (exports.GetScoreCommentsTypeEnum = {}));
var GetScoreCommentsQueryParams = /** @class */ (function (_super) {
    __extends(GetScoreCommentsQueryParams, _super);
    function GetScoreCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetScoreCommentsQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sharingKey" }),
        __metadata("design:type", String)
    ], GetScoreCommentsQueryParams.prototype, "sharingKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetScoreCommentsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetScoreCommentsQueryParams.prototype, "type", void 0);
    return GetScoreCommentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetScoreCommentsQueryParams = GetScoreCommentsQueryParams;
var GetScoreCommentsSecurity = /** @class */ (function (_super) {
    __extends(GetScoreCommentsSecurity, _super);
    function GetScoreCommentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetScoreCommentsSecurity.prototype, "oAuth2", void 0);
    return GetScoreCommentsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetScoreCommentsSecurity = GetScoreCommentsSecurity;
var GetScoreCommentsRequest = /** @class */ (function (_super) {
    __extends(GetScoreCommentsRequest, _super);
    function GetScoreCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetScoreCommentsPathParams)
    ], GetScoreCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetScoreCommentsQueryParams)
    ], GetScoreCommentsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetScoreCommentsSecurity)
    ], GetScoreCommentsRequest.prototype, "security", void 0);
    return GetScoreCommentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetScoreCommentsRequest = GetScoreCommentsRequest;
var GetScoreCommentsResponse = /** @class */ (function (_super) {
    __extends(GetScoreCommentsResponse, _super);
    function GetScoreCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetScoreCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FlatErrorResponse)
    ], GetScoreCommentsResponse.prototype, "flatErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.ScoreComment }),
        __metadata("design:type", Array)
    ], GetScoreCommentsResponse.prototype, "scoreComments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetScoreCommentsResponse.prototype, "statusCode", void 0);
    return GetScoreCommentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetScoreCommentsResponse = GetScoreCommentsResponse;
