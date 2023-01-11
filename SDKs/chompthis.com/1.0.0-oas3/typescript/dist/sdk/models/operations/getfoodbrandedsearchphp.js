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
exports.GetFoodBrandedSearchPhpResponse = exports.GetFoodBrandedSearchPhpRequest = exports.GetFoodBrandedSearchPhpSecurity = exports.GetFoodBrandedSearchPhpQueryParams = exports.GetFoodBrandedSearchPhpDietEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetFoodBrandedSearchPhpDietEnum;
(function (GetFoodBrandedSearchPhpDietEnum) {
    GetFoodBrandedSearchPhpDietEnum["Vegan"] = "Vegan";
    GetFoodBrandedSearchPhpDietEnum["Vegetarian"] = "Vegetarian";
    GetFoodBrandedSearchPhpDietEnum["GlutenFree"] = "Gluten Free";
})(GetFoodBrandedSearchPhpDietEnum = exports.GetFoodBrandedSearchPhpDietEnum || (exports.GetFoodBrandedSearchPhpDietEnum = {}));
var GetFoodBrandedSearchPhpQueryParams = /** @class */ (function (_super) {
    __extends(GetFoodBrandedSearchPhpQueryParams, _super);
    function GetFoodBrandedSearchPhpQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=allergen" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "allergen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=brand" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "brand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=diet" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "diet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ingredient" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "ingredient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=keyword" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "keyword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mineral" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "mineral", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nutrient" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "nutrient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=palm_oil" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "palmOil", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=trace" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "trace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vitamin" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "vitamin", void 0);
    return GetFoodBrandedSearchPhpQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetFoodBrandedSearchPhpQueryParams = GetFoodBrandedSearchPhpQueryParams;
var GetFoodBrandedSearchPhpSecurity = /** @class */ (function (_super) {
    __extends(GetFoodBrandedSearchPhpSecurity, _super);
    function GetFoodBrandedSearchPhpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetFoodBrandedSearchPhpSecurity.prototype, "apiKeyAuth", void 0);
    return GetFoodBrandedSearchPhpSecurity;
}(utils_1.SpeakeasyBase));
exports.GetFoodBrandedSearchPhpSecurity = GetFoodBrandedSearchPhpSecurity;
var GetFoodBrandedSearchPhpRequest = /** @class */ (function (_super) {
    __extends(GetFoodBrandedSearchPhpRequest, _super);
    function GetFoodBrandedSearchPhpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFoodBrandedSearchPhpQueryParams)
    ], GetFoodBrandedSearchPhpRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFoodBrandedSearchPhpSecurity)
    ], GetFoodBrandedSearchPhpRequest.prototype, "security", void 0);
    return GetFoodBrandedSearchPhpRequest;
}(utils_1.SpeakeasyBase));
exports.GetFoodBrandedSearchPhpRequest = GetFoodBrandedSearchPhpRequest;
var GetFoodBrandedSearchPhpResponse = /** @class */ (function (_super) {
    __extends(GetFoodBrandedSearchPhpResponse, _super);
    function GetFoodBrandedSearchPhpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BrandedFoodObject)
    ], GetFoodBrandedSearchPhpResponse.prototype, "brandedFoodObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFoodBrandedSearchPhpResponse.prototype, "statusCode", void 0);
    return GetFoodBrandedSearchPhpResponse;
}(utils_1.SpeakeasyBase));
exports.GetFoodBrandedSearchPhpResponse = GetFoodBrandedSearchPhpResponse;
