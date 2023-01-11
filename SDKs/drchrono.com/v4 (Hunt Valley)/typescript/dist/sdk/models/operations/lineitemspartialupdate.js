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
exports.LineItemsPartialUpdateResponse = exports.LineItemsPartialUpdateRequest = exports.LineItemsPartialUpdateSecurity = exports.LineItemsPartialUpdateQueryParams = exports.LineItemsPartialUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LineItemsPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(LineItemsPartialUpdatePathParams, _super);
    function LineItemsPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], LineItemsPartialUpdatePathParams.prototype, "id", void 0);
    return LineItemsPartialUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.LineItemsPartialUpdatePathParams = LineItemsPartialUpdatePathParams;
var LineItemsPartialUpdateQueryParams = /** @class */ (function (_super) {
    __extends(LineItemsPartialUpdateQueryParams, _super);
    function LineItemsPartialUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appointment" }),
        __metadata("design:type", Number)
    ], LineItemsPartialUpdateQueryParams.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], LineItemsPartialUpdateQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Number)
    ], LineItemsPartialUpdateQueryParams.prototype, "office", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], LineItemsPartialUpdateQueryParams.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=posted_date" }),
        __metadata("design:type", String)
    ], LineItemsPartialUpdateQueryParams.prototype, "postedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=service_date" }),
        __metadata("design:type", String)
    ], LineItemsPartialUpdateQueryParams.prototype, "serviceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], LineItemsPartialUpdateQueryParams.prototype, "since", void 0);
    return LineItemsPartialUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.LineItemsPartialUpdateQueryParams = LineItemsPartialUpdateQueryParams;
var LineItemsPartialUpdateSecurity = /** @class */ (function (_super) {
    __extends(LineItemsPartialUpdateSecurity, _super);
    function LineItemsPartialUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], LineItemsPartialUpdateSecurity.prototype, "drchronoOauth2", void 0);
    return LineItemsPartialUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.LineItemsPartialUpdateSecurity = LineItemsPartialUpdateSecurity;
var LineItemsPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(LineItemsPartialUpdateRequest, _super);
    function LineItemsPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LineItemsPartialUpdatePathParams)
    ], LineItemsPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LineItemsPartialUpdateQueryParams)
    ], LineItemsPartialUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LineItemsPartialUpdateSecurity)
    ], LineItemsPartialUpdateRequest.prototype, "security", void 0);
    return LineItemsPartialUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.LineItemsPartialUpdateRequest = LineItemsPartialUpdateRequest;
var LineItemsPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(LineItemsPartialUpdateResponse, _super);
    function LineItemsPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LineItemsPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LineItemsPartialUpdateResponse.prototype, "statusCode", void 0);
    return LineItemsPartialUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.LineItemsPartialUpdateResponse = LineItemsPartialUpdateResponse;
