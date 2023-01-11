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
exports.GetCommitteeCommitteeIdReportsResponse = exports.GetCommitteeCommitteeIdReportsRequest = exports.GetCommitteeCommitteeIdReportsQueryParams = exports.GetCommitteeCommitteeIdReportsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCommitteeCommitteeIdReportsPathParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdReportsPathParams, _super);
    function GetCommitteeCommitteeIdReportsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=committee_id" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsPathParams.prototype, "committeeId", void 0);
    return GetCommitteeCommitteeIdReportsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdReportsPathParams = GetCommitteeCommitteeIdReportsPathParams;
var GetCommitteeCommitteeIdReportsQueryParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdReportsQueryParams, _super);
    function GetCommitteeCommitteeIdReportsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=beginning_image_number" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "beginningImageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=candidate_id" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "candidateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "cycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=is_amended" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "isAmended", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_cash_on_hand_end_period_amount" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "maxCashOnHandEndPeriodAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_debts_owed_expenditures" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "maxDebtsOwedExpenditures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_disbursements_amount" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "maxDisbursementsAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_independent_expenditures" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "maxIndependentExpenditures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_party_coordinated_expenditures" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "maxPartyCoordinatedExpenditures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_receipts_amount" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "maxReceiptsAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_total_contributions" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "maxTotalContributions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_cash_on_hand_end_period_amount" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "minCashOnHandEndPeriodAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_debts_owed_amount" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "minDebtsOwedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_disbursements_amount" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "minDisbursementsAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_independent_expenditures" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "minIndependentExpenditures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_party_coordinated_expenditures" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "minPartyCoordinatedExpenditures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_receipts_amount" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "minReceiptsAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_total_contributions" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "minTotalContributions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=report_type" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "reportType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdReportsQueryParams.prototype, "year", void 0);
    return GetCommitteeCommitteeIdReportsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdReportsQueryParams = GetCommitteeCommitteeIdReportsQueryParams;
var GetCommitteeCommitteeIdReportsRequest = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdReportsRequest, _super);
    function GetCommitteeCommitteeIdReportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCommitteeCommitteeIdReportsPathParams)
    ], GetCommitteeCommitteeIdReportsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCommitteeCommitteeIdReportsQueryParams)
    ], GetCommitteeCommitteeIdReportsRequest.prototype, "queryParams", void 0);
    return GetCommitteeCommitteeIdReportsRequest;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdReportsRequest = GetCommitteeCommitteeIdReportsRequest;
var GetCommitteeCommitteeIdReportsResponse = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdReportsResponse, _super);
    function GetCommitteeCommitteeIdReportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CommitteeReportsPage)
    ], GetCommitteeCommitteeIdReportsResponse.prototype, "committeeReportsPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdReportsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdReportsResponse.prototype, "statusCode", void 0);
    return GetCommitteeCommitteeIdReportsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdReportsResponse = GetCommitteeCommitteeIdReportsResponse;
