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
exports.GetPeopleResponse = exports.GetPeopleRequest = exports.GetPeople400ApplicationVndApiPlusJson = exports.GetPeople400ApplicationVndApiPlusJsonErrors = exports.GetPeople400ApplicationVndApiPlusJsonErrorsSource = exports.GetPeople200ApplicationVndApiPlusJson = exports.GetPeopleQueryParams = exports.GetPeopleSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPeopleSortEnum;
(function (GetPeopleSortEnum) {
    GetPeopleSortEnum["CreatedAt"] = "created_at";
    GetPeopleSortEnum["FirstName"] = "first_name";
    GetPeopleSortEnum["LastName"] = "last_name";
    GetPeopleSortEnum["UpdatedAt"] = "updated_at";
})(GetPeopleSortEnum = exports.GetPeopleSortEnum || (exports.GetPeopleSortEnum = {}));
var GetPeopleQueryParams = /** @class */ (function (_super) {
    __extends(GetPeopleQueryParams, _super);
    function GetPeopleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids[]" }),
        __metadata("design:type", Array)
    ], GetPeopleQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[number]" }),
        __metadata("design:type", Number)
    ], GetPeopleQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[size]" }),
        __metadata("design:type", Number)
    ], GetPeopleQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetPeopleQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", Array)
    ], GetPeopleQueryParams.prototype, "sort", void 0);
    return GetPeopleQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPeopleQueryParams = GetPeopleQueryParams;
var GetPeople200ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetPeople200ApplicationVndApiPlusJson, _super);
    function GetPeople200ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.Person }),
        __metadata("design:type", Array)
    ], GetPeople200ApplicationVndApiPlusJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Links)
    ], GetPeople200ApplicationVndApiPlusJson.prototype, "links", void 0);
    return GetPeople200ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetPeople200ApplicationVndApiPlusJson = GetPeople200ApplicationVndApiPlusJson;
// GetPeople400ApplicationVndApiPlusJsonErrorsSource
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
var GetPeople400ApplicationVndApiPlusJsonErrorsSource = /** @class */ (function (_super) {
    __extends(GetPeople400ApplicationVndApiPlusJsonErrorsSource, _super);
    function GetPeople400ApplicationVndApiPlusJsonErrorsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], GetPeople400ApplicationVndApiPlusJsonErrorsSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], GetPeople400ApplicationVndApiPlusJsonErrorsSource.prototype, "pointer", void 0);
    return GetPeople400ApplicationVndApiPlusJsonErrorsSource;
}(utils_1.SpeakeasyBase));
exports.GetPeople400ApplicationVndApiPlusJsonErrorsSource = GetPeople400ApplicationVndApiPlusJsonErrorsSource;
var GetPeople400ApplicationVndApiPlusJsonErrors = /** @class */ (function (_super) {
    __extends(GetPeople400ApplicationVndApiPlusJsonErrors, _super);
    function GetPeople400ApplicationVndApiPlusJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetPeople400ApplicationVndApiPlusJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetPeople400ApplicationVndApiPlusJsonErrors.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", GetPeople400ApplicationVndApiPlusJsonErrorsSource)
    ], GetPeople400ApplicationVndApiPlusJsonErrors.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPeople400ApplicationVndApiPlusJsonErrors.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetPeople400ApplicationVndApiPlusJsonErrors.prototype, "title", void 0);
    return GetPeople400ApplicationVndApiPlusJsonErrors;
}(utils_1.SpeakeasyBase));
exports.GetPeople400ApplicationVndApiPlusJsonErrors = GetPeople400ApplicationVndApiPlusJsonErrors;
var GetPeople400ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetPeople400ApplicationVndApiPlusJson, _super);
    function GetPeople400ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: GetPeople400ApplicationVndApiPlusJsonErrors }),
        __metadata("design:type", Array)
    ], GetPeople400ApplicationVndApiPlusJson.prototype, "errors", void 0);
    return GetPeople400ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetPeople400ApplicationVndApiPlusJson = GetPeople400ApplicationVndApiPlusJson;
var GetPeopleRequest = /** @class */ (function (_super) {
    __extends(GetPeopleRequest, _super);
    function GetPeopleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPeopleQueryParams)
    ], GetPeopleRequest.prototype, "queryParams", void 0);
    return GetPeopleRequest;
}(utils_1.SpeakeasyBase));
exports.GetPeopleRequest = GetPeopleRequest;
var GetPeopleResponse = /** @class */ (function (_super) {
    __extends(GetPeopleResponse, _super);
    function GetPeopleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPeopleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPeopleResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPeopleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPeople200ApplicationVndApiPlusJson)
    ], GetPeopleResponse.prototype, "getPeople200ApplicationVndApiPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPeople400ApplicationVndApiPlusJson)
    ], GetPeopleResponse.prototype, "getPeople400ApplicationVndApiPlusJsonObject", void 0);
    return GetPeopleResponse;
}(utils_1.SpeakeasyBase));
exports.GetPeopleResponse = GetPeopleResponse;
