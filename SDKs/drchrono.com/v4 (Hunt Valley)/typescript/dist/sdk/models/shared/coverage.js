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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coverage = exports.CoverageRequestServiceTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var CoverageRequestServiceTypeEnum;
(function (CoverageRequestServiceTypeEnum) {
    CoverageRequestServiceTypeEnum["One"] = "1";
    CoverageRequestServiceTypeEnum["Two"] = "2";
    CoverageRequestServiceTypeEnum["Three"] = "3";
    CoverageRequestServiceTypeEnum["Four"] = "4";
    CoverageRequestServiceTypeEnum["Five"] = "5";
    CoverageRequestServiceTypeEnum["Six"] = "6";
    CoverageRequestServiceTypeEnum["Seven"] = "7";
    CoverageRequestServiceTypeEnum["Eight"] = "8";
    CoverageRequestServiceTypeEnum["Nine"] = "9";
    CoverageRequestServiceTypeEnum["Ten"] = "10";
    CoverageRequestServiceTypeEnum["Eleven"] = "11";
    CoverageRequestServiceTypeEnum["Twelve"] = "12";
    CoverageRequestServiceTypeEnum["Thirteen"] = "13";
    CoverageRequestServiceTypeEnum["Fourteen"] = "14";
    CoverageRequestServiceTypeEnum["Fifteen"] = "15";
    CoverageRequestServiceTypeEnum["Sixteen"] = "16";
    CoverageRequestServiceTypeEnum["Seventeen"] = "17";
    CoverageRequestServiceTypeEnum["Eighteen"] = "18";
    CoverageRequestServiceTypeEnum["Nineteen"] = "19";
    CoverageRequestServiceTypeEnum["Twenty"] = "20";
    CoverageRequestServiceTypeEnum["TwentyOne"] = "21";
    CoverageRequestServiceTypeEnum["TwentyTwo"] = "22";
    CoverageRequestServiceTypeEnum["TwentyThree"] = "23";
    CoverageRequestServiceTypeEnum["TwentyFour"] = "24";
    CoverageRequestServiceTypeEnum["TwentyFive"] = "25";
    CoverageRequestServiceTypeEnum["TwentySix"] = "26";
    CoverageRequestServiceTypeEnum["TwentySeven"] = "27";
    CoverageRequestServiceTypeEnum["TwentyEight"] = "28";
    CoverageRequestServiceTypeEnum["Thirty"] = "30";
    CoverageRequestServiceTypeEnum["ThirtyTwo"] = "32";
    CoverageRequestServiceTypeEnum["ThirtyThree"] = "33";
    CoverageRequestServiceTypeEnum["ThirtyFour"] = "34";
    CoverageRequestServiceTypeEnum["ThirtyFive"] = "35";
    CoverageRequestServiceTypeEnum["ThirtySix"] = "36";
    CoverageRequestServiceTypeEnum["ThirtySeven"] = "37";
    CoverageRequestServiceTypeEnum["ThirtyEight"] = "38";
    CoverageRequestServiceTypeEnum["ThirtyNine"] = "39";
    CoverageRequestServiceTypeEnum["Forty"] = "40";
    CoverageRequestServiceTypeEnum["FortyOne"] = "41";
    CoverageRequestServiceTypeEnum["FortyTwo"] = "42";
    CoverageRequestServiceTypeEnum["FortyThree"] = "43";
    CoverageRequestServiceTypeEnum["FortyFour"] = "44";
    CoverageRequestServiceTypeEnum["FortyFive"] = "45";
    CoverageRequestServiceTypeEnum["FortySix"] = "46";
    CoverageRequestServiceTypeEnum["FortySeven"] = "47";
    CoverageRequestServiceTypeEnum["FortyEight"] = "48";
    CoverageRequestServiceTypeEnum["FortyNine"] = "49";
    CoverageRequestServiceTypeEnum["Fifty"] = "50";
    CoverageRequestServiceTypeEnum["FiftyOne"] = "51";
    CoverageRequestServiceTypeEnum["FiftyTwo"] = "52";
    CoverageRequestServiceTypeEnum["FiftyThree"] = "53";
    CoverageRequestServiceTypeEnum["FiftyFour"] = "54";
    CoverageRequestServiceTypeEnum["FiftyFive"] = "55";
    CoverageRequestServiceTypeEnum["FiftySix"] = "56";
    CoverageRequestServiceTypeEnum["FiftySeven"] = "57";
    CoverageRequestServiceTypeEnum["FiftyEight"] = "58";
    CoverageRequestServiceTypeEnum["FiftyNine"] = "59";
    CoverageRequestServiceTypeEnum["Sixty"] = "60";
    CoverageRequestServiceTypeEnum["SixtyOne"] = "61";
    CoverageRequestServiceTypeEnum["SixtyTwo"] = "62";
    CoverageRequestServiceTypeEnum["SixtyThree"] = "63";
    CoverageRequestServiceTypeEnum["SixtyFour"] = "64";
    CoverageRequestServiceTypeEnum["SixtyFive"] = "65";
    CoverageRequestServiceTypeEnum["SixtySix"] = "66";
    CoverageRequestServiceTypeEnum["SixtySeven"] = "67";
    CoverageRequestServiceTypeEnum["SixtyEight"] = "68";
    CoverageRequestServiceTypeEnum["SixtyNine"] = "69";
    CoverageRequestServiceTypeEnum["Seventy"] = "70";
    CoverageRequestServiceTypeEnum["SeventyOne"] = "71";
    CoverageRequestServiceTypeEnum["SeventyTwo"] = "72";
    CoverageRequestServiceTypeEnum["SeventyThree"] = "73";
    CoverageRequestServiceTypeEnum["SeventyFour"] = "74";
    CoverageRequestServiceTypeEnum["SeventyFive"] = "75";
    CoverageRequestServiceTypeEnum["SeventySix"] = "76";
    CoverageRequestServiceTypeEnum["SeventySeven"] = "77";
    CoverageRequestServiceTypeEnum["SeventyEight"] = "78";
    CoverageRequestServiceTypeEnum["SeventyNine"] = "79";
    CoverageRequestServiceTypeEnum["Eighty"] = "80";
    CoverageRequestServiceTypeEnum["EightyOne"] = "81";
    CoverageRequestServiceTypeEnum["EightyTwo"] = "82";
    CoverageRequestServiceTypeEnum["EightyThree"] = "83";
    CoverageRequestServiceTypeEnum["EightyFour"] = "84";
    CoverageRequestServiceTypeEnum["EightyFive"] = "85";
    CoverageRequestServiceTypeEnum["EightySix"] = "86";
    CoverageRequestServiceTypeEnum["EightySeven"] = "87";
    CoverageRequestServiceTypeEnum["EightyEight"] = "88";
    CoverageRequestServiceTypeEnum["EightyNine"] = "89";
    CoverageRequestServiceTypeEnum["Ninety"] = "90";
    CoverageRequestServiceTypeEnum["NinetyOne"] = "91";
    CoverageRequestServiceTypeEnum["NinetyTwo"] = "92";
    CoverageRequestServiceTypeEnum["NinetyThree"] = "93";
    CoverageRequestServiceTypeEnum["NinetyFour"] = "94";
    CoverageRequestServiceTypeEnum["NinetyFive"] = "95";
    CoverageRequestServiceTypeEnum["NinetySix"] = "96";
    CoverageRequestServiceTypeEnum["NinetySeven"] = "97";
    CoverageRequestServiceTypeEnum["NinetyEight"] = "98";
    CoverageRequestServiceTypeEnum["NinetyNine"] = "99";
    CoverageRequestServiceTypeEnum["A0"] = "A0";
    CoverageRequestServiceTypeEnum["A1"] = "A1";
    CoverageRequestServiceTypeEnum["A2"] = "A2";
    CoverageRequestServiceTypeEnum["A3"] = "A3";
    CoverageRequestServiceTypeEnum["A4"] = "A4";
    CoverageRequestServiceTypeEnum["A5"] = "A5";
    CoverageRequestServiceTypeEnum["A6"] = "A6";
    CoverageRequestServiceTypeEnum["A7"] = "A7";
    CoverageRequestServiceTypeEnum["A8"] = "A8";
    CoverageRequestServiceTypeEnum["A9"] = "A9";
    CoverageRequestServiceTypeEnum["Aa"] = "AA";
    CoverageRequestServiceTypeEnum["Ab"] = "AB";
    CoverageRequestServiceTypeEnum["Ac"] = "AC";
    CoverageRequestServiceTypeEnum["Ad"] = "AD";
    CoverageRequestServiceTypeEnum["Ae"] = "AE";
    CoverageRequestServiceTypeEnum["Af"] = "AF";
    CoverageRequestServiceTypeEnum["Ag"] = "AG";
    CoverageRequestServiceTypeEnum["Ah"] = "AH";
    CoverageRequestServiceTypeEnum["Ai"] = "AI";
    CoverageRequestServiceTypeEnum["Aj"] = "AJ";
    CoverageRequestServiceTypeEnum["Ak"] = "AK";
    CoverageRequestServiceTypeEnum["Al"] = "AL";
    CoverageRequestServiceTypeEnum["Am"] = "AM";
    CoverageRequestServiceTypeEnum["An"] = "AN";
    CoverageRequestServiceTypeEnum["Ao"] = "AO";
    CoverageRequestServiceTypeEnum["Aq"] = "AQ";
    CoverageRequestServiceTypeEnum["Ar"] = "AR";
    CoverageRequestServiceTypeEnum["B1"] = "B1";
    CoverageRequestServiceTypeEnum["B2"] = "B2";
    CoverageRequestServiceTypeEnum["B3"] = "B3";
    CoverageRequestServiceTypeEnum["Ba"] = "BA";
    CoverageRequestServiceTypeEnum["Bb"] = "BB";
    CoverageRequestServiceTypeEnum["Bc"] = "BC";
    CoverageRequestServiceTypeEnum["Bd"] = "BD";
    CoverageRequestServiceTypeEnum["Be"] = "BE";
    CoverageRequestServiceTypeEnum["Bf"] = "BF";
    CoverageRequestServiceTypeEnum["Bg"] = "BG";
    CoverageRequestServiceTypeEnum["Bh"] = "BH";
    CoverageRequestServiceTypeEnum["Bi"] = "BI";
    CoverageRequestServiceTypeEnum["Bj"] = "BJ";
    CoverageRequestServiceTypeEnum["Bk"] = "BK";
    CoverageRequestServiceTypeEnum["Bl"] = "BL";
    CoverageRequestServiceTypeEnum["Bm"] = "BM";
    CoverageRequestServiceTypeEnum["Bn"] = "BN";
    CoverageRequestServiceTypeEnum["Bp"] = "BP";
    CoverageRequestServiceTypeEnum["Bq"] = "BQ";
    CoverageRequestServiceTypeEnum["Br"] = "BR";
    CoverageRequestServiceTypeEnum["Bs"] = "BS";
    CoverageRequestServiceTypeEnum["Bt"] = "BT";
    CoverageRequestServiceTypeEnum["Bu"] = "BU";
    CoverageRequestServiceTypeEnum["Bv"] = "BV";
    CoverageRequestServiceTypeEnum["Bw"] = "BW";
    CoverageRequestServiceTypeEnum["Bx"] = "BX";
    CoverageRequestServiceTypeEnum["By"] = "BY";
    CoverageRequestServiceTypeEnum["Bz"] = "BZ";
    CoverageRequestServiceTypeEnum["C1"] = "C1";
    CoverageRequestServiceTypeEnum["Ca"] = "CA";
    CoverageRequestServiceTypeEnum["Cb"] = "CB";
    CoverageRequestServiceTypeEnum["Cc"] = "CC";
    CoverageRequestServiceTypeEnum["Cd"] = "CD";
    CoverageRequestServiceTypeEnum["Ce"] = "CE";
    CoverageRequestServiceTypeEnum["Cf"] = "CF";
    CoverageRequestServiceTypeEnum["Cg"] = "CG";
    CoverageRequestServiceTypeEnum["Ch"] = "CH";
    CoverageRequestServiceTypeEnum["Ci"] = "CI";
    CoverageRequestServiceTypeEnum["Cj"] = "CJ";
    CoverageRequestServiceTypeEnum["Ck"] = "CK";
    CoverageRequestServiceTypeEnum["Cl"] = "CL";
    CoverageRequestServiceTypeEnum["Cm"] = "CM";
    CoverageRequestServiceTypeEnum["Cn"] = "CN";
    CoverageRequestServiceTypeEnum["Co"] = "CO";
    CoverageRequestServiceTypeEnum["Cp"] = "CP";
    CoverageRequestServiceTypeEnum["Cq"] = "CQ";
    CoverageRequestServiceTypeEnum["Dg"] = "DG";
    CoverageRequestServiceTypeEnum["Dm"] = "DM";
    CoverageRequestServiceTypeEnum["Ds"] = "DS";
    CoverageRequestServiceTypeEnum["Gf"] = "GF";
    CoverageRequestServiceTypeEnum["Gn"] = "GN";
    CoverageRequestServiceTypeEnum["Gy"] = "GY";
    CoverageRequestServiceTypeEnum["Ic"] = "IC";
    CoverageRequestServiceTypeEnum["Mh"] = "MH";
    CoverageRequestServiceTypeEnum["Ni"] = "NI";
    CoverageRequestServiceTypeEnum["On"] = "ON";
    CoverageRequestServiceTypeEnum["Pt"] = "PT";
    CoverageRequestServiceTypeEnum["Pu"] = "PU";
    CoverageRequestServiceTypeEnum["Rn"] = "RN";
    CoverageRequestServiceTypeEnum["Rt"] = "RT";
    CoverageRequestServiceTypeEnum["Tc"] = "TC";
    CoverageRequestServiceTypeEnum["Tn"] = "TN";
    CoverageRequestServiceTypeEnum["Uc"] = "UC";
})(CoverageRequestServiceTypeEnum = exports.CoverageRequestServiceTypeEnum || (exports.CoverageRequestServiceTypeEnum = {}));
var Coverage = /** @class */ (function (_super) {
    __extends(Coverage, _super);
    function Coverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appointment" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cob_level" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "cobLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverage_details" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "coverageDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverage_subscriber" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "coverageSubscriber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eligibility" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "eligibility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payer_name" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "payerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query_date" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "queryDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_service_type" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "requestServiceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_type_description" }),
        __metadata("design:type", String)
    ], Coverage.prototype, "serviceTypeDescription", void 0);
    return Coverage;
}(utils_1.SpeakeasyBase));
exports.Coverage = Coverage;
