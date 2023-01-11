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
exports.GetCreditsResponse = exports.GetCreditsRequest = exports.GetCredits400ApplicationVndApiPlusJson = exports.GetCredits400ApplicationVndApiPlusJsonErrors = exports.GetCredits400ApplicationVndApiPlusJsonErrorsSource = exports.GetCredits200ApplicationVndApiPlusJson = exports.GetCreditsQueryParams = exports.GetCreditsSortEnum = exports.GetCreditsCreditableTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCreditsCreditableTypeEnum;
(function (GetCreditsCreditableTypeEnum) {
    GetCreditsCreditableTypeEnum["Series"] = "Series";
    GetCreditsCreditableTypeEnum["Season"] = "Season";
    GetCreditsCreditableTypeEnum["Episode"] = "Episode";
})(GetCreditsCreditableTypeEnum = exports.GetCreditsCreditableTypeEnum || (exports.GetCreditsCreditableTypeEnum = {}));
var GetCreditsSortEnum;
(function (GetCreditsSortEnum) {
    GetCreditsSortEnum["CreatedAt"] = "created_at";
    GetCreditsSortEnum["Position"] = "position";
    GetCreditsSortEnum["UpdatedAt"] = "updated_at";
})(GetCreditsSortEnum = exports.GetCreditsSortEnum || (exports.GetCreditsSortEnum = {}));
var GetCreditsQueryParams = /** @class */ (function (_super) {
    __extends(GetCreditsQueryParams, _super);
    function GetCreditsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=creditable_id" }),
        __metadata("design:type", String)
    ], GetCreditsQueryParams.prototype, "creditableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=creditable_type" }),
        __metadata("design:type", String)
    ], GetCreditsQueryParams.prototype, "creditableType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids[]" }),
        __metadata("design:type", Array)
    ], GetCreditsQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[number]" }),
        __metadata("design:type", Number)
    ], GetCreditsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[size]" }),
        __metadata("design:type", Number)
    ], GetCreditsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", Array)
    ], GetCreditsQueryParams.prototype, "sort", void 0);
    return GetCreditsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCreditsQueryParams = GetCreditsQueryParams;
var GetCredits200ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetCredits200ApplicationVndApiPlusJson, _super);
    function GetCredits200ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.Credit }),
        __metadata("design:type", Array)
    ], GetCredits200ApplicationVndApiPlusJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Links)
    ], GetCredits200ApplicationVndApiPlusJson.prototype, "links", void 0);
    return GetCredits200ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetCredits200ApplicationVndApiPlusJson = GetCredits200ApplicationVndApiPlusJson;
// GetCredits400ApplicationVndApiPlusJsonErrorsSource
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
var GetCredits400ApplicationVndApiPlusJsonErrorsSource = /** @class */ (function (_super) {
    __extends(GetCredits400ApplicationVndApiPlusJsonErrorsSource, _super);
    function GetCredits400ApplicationVndApiPlusJsonErrorsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], GetCredits400ApplicationVndApiPlusJsonErrorsSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], GetCredits400ApplicationVndApiPlusJsonErrorsSource.prototype, "pointer", void 0);
    return GetCredits400ApplicationVndApiPlusJsonErrorsSource;
}(utils_1.SpeakeasyBase));
exports.GetCredits400ApplicationVndApiPlusJsonErrorsSource = GetCredits400ApplicationVndApiPlusJsonErrorsSource;
var GetCredits400ApplicationVndApiPlusJsonErrors = /** @class */ (function (_super) {
    __extends(GetCredits400ApplicationVndApiPlusJsonErrors, _super);
    function GetCredits400ApplicationVndApiPlusJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetCredits400ApplicationVndApiPlusJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetCredits400ApplicationVndApiPlusJsonErrors.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", GetCredits400ApplicationVndApiPlusJsonErrorsSource)
    ], GetCredits400ApplicationVndApiPlusJsonErrors.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCredits400ApplicationVndApiPlusJsonErrors.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCredits400ApplicationVndApiPlusJsonErrors.prototype, "title", void 0);
    return GetCredits400ApplicationVndApiPlusJsonErrors;
}(utils_1.SpeakeasyBase));
exports.GetCredits400ApplicationVndApiPlusJsonErrors = GetCredits400ApplicationVndApiPlusJsonErrors;
var GetCredits400ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetCredits400ApplicationVndApiPlusJson, _super);
    function GetCredits400ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: GetCredits400ApplicationVndApiPlusJsonErrors }),
        __metadata("design:type", Array)
    ], GetCredits400ApplicationVndApiPlusJson.prototype, "errors", void 0);
    return GetCredits400ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetCredits400ApplicationVndApiPlusJson = GetCredits400ApplicationVndApiPlusJson;
var GetCreditsRequest = /** @class */ (function (_super) {
    __extends(GetCreditsRequest, _super);
    function GetCreditsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreditsQueryParams)
    ], GetCreditsRequest.prototype, "queryParams", void 0);
    return GetCreditsRequest;
}(utils_1.SpeakeasyBase));
exports.GetCreditsRequest = GetCreditsRequest;
var GetCreditsResponse = /** @class */ (function (_super) {
    __extends(GetCreditsResponse, _super);
    function GetCreditsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCreditsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCreditsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCreditsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCredits200ApplicationVndApiPlusJson)
    ], GetCreditsResponse.prototype, "getCredits200ApplicationVndApiPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCredits400ApplicationVndApiPlusJson)
    ], GetCreditsResponse.prototype, "getCredits400ApplicationVndApiPlusJsonObject", void 0);
    return GetCreditsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCreditsResponse = GetCreditsResponse;
