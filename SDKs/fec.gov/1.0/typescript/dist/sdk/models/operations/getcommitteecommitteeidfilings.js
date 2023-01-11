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
exports.GetCommitteeCommitteeIdFilingsResponse = exports.GetCommitteeCommitteeIdFilingsRequest = exports.GetCommitteeCommitteeIdFilingsQueryParams = exports.GetCommitteeCommitteeIdFilingsOfficeEnum = exports.GetCommitteeCommitteeIdFilingsFilerTypeEnum = exports.GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum = exports.GetCommitteeCommitteeIdFilingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCommitteeCommitteeIdFilingsPathParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdFilingsPathParams, _super);
    function GetCommitteeCommitteeIdFilingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=committee_id" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdFilingsPathParams.prototype, "committeeId", void 0);
    return GetCommitteeCommitteeIdFilingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdFilingsPathParams = GetCommitteeCommitteeIdFilingsPathParams;
var GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum;
(function (GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum) {
    GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum["Unknown"] = "";
    GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum["N"] = "N";
    GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum["A"] = "A";
    GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum["T"] = "T";
    GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum["C"] = "C";
    GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum["M"] = "M";
    GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum["S"] = "S";
})(GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum = exports.GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum || (exports.GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum = {}));
var GetCommitteeCommitteeIdFilingsFilerTypeEnum;
(function (GetCommitteeCommitteeIdFilingsFilerTypeEnum) {
    GetCommitteeCommitteeIdFilingsFilerTypeEnum["EFile"] = "e-file";
    GetCommitteeCommitteeIdFilingsFilerTypeEnum["Paper"] = "paper";
})(GetCommitteeCommitteeIdFilingsFilerTypeEnum = exports.GetCommitteeCommitteeIdFilingsFilerTypeEnum || (exports.GetCommitteeCommitteeIdFilingsFilerTypeEnum = {}));
var GetCommitteeCommitteeIdFilingsOfficeEnum;
(function (GetCommitteeCommitteeIdFilingsOfficeEnum) {
    GetCommitteeCommitteeIdFilingsOfficeEnum["Unknown"] = "";
    GetCommitteeCommitteeIdFilingsOfficeEnum["H"] = "H";
    GetCommitteeCommitteeIdFilingsOfficeEnum["S"] = "S";
    GetCommitteeCommitteeIdFilingsOfficeEnum["P"] = "P";
})(GetCommitteeCommitteeIdFilingsOfficeEnum = exports.GetCommitteeCommitteeIdFilingsOfficeEnum || (exports.GetCommitteeCommitteeIdFilingsOfficeEnum = {}));
var GetCommitteeCommitteeIdFilingsQueryParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdFilingsQueryParams, _super);
    function GetCommitteeCommitteeIdFilingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=amendment_indicator" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "amendmentIndicator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=beginning_image_number" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "beginningImageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=committee_type" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "committeeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "cycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "district", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=document_type" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "documentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=file_number" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "fileNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filer_type" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "filerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=form_category" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "formCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=form_type" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "formType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=is_amended" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "isAmended", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_receipt_date" }),
        __metadata("design:type", Date)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "maxReceiptDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_receipt_date" }),
        __metadata("design:type", Date)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "minReceiptDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=most_recent" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "mostRecent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "office", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=party" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "party", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=primary_general_indicator" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "primaryGeneralIndicator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=report_type" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "reportType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=report_year" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "reportYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=request_type" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "requestType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdFilingsQueryParams.prototype, "state", void 0);
    return GetCommitteeCommitteeIdFilingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdFilingsQueryParams = GetCommitteeCommitteeIdFilingsQueryParams;
var GetCommitteeCommitteeIdFilingsRequest = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdFilingsRequest, _super);
    function GetCommitteeCommitteeIdFilingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCommitteeCommitteeIdFilingsPathParams)
    ], GetCommitteeCommitteeIdFilingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCommitteeCommitteeIdFilingsQueryParams)
    ], GetCommitteeCommitteeIdFilingsRequest.prototype, "queryParams", void 0);
    return GetCommitteeCommitteeIdFilingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdFilingsRequest = GetCommitteeCommitteeIdFilingsRequest;
var GetCommitteeCommitteeIdFilingsResponse = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdFilingsResponse, _super);
    function GetCommitteeCommitteeIdFilingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdFilingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FilingsPage)
    ], GetCommitteeCommitteeIdFilingsResponse.prototype, "filingsPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdFilingsResponse.prototype, "statusCode", void 0);
    return GetCommitteeCommitteeIdFilingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdFilingsResponse = GetCommitteeCommitteeIdFilingsResponse;
