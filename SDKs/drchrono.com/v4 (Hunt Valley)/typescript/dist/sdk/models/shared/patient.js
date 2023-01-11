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
exports.Patient = exports.PatientWorkerCompInsurance = exports.PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum = exports.PatientWorkerCompInsuranceWorkersCompPayerStateEnum = exports.PatientTertiaryInsurance = exports.PatientTertiaryInsuranceSubscriberStateEnum = exports.PatientTertiaryInsuranceSubscriberGenderEnum = exports.PatientTertiaryInsuranceSubscriberCountryEnum = exports.PatientTertiaryInsurancePatientRelationshipToSubscriberEnum = exports.PatientTertiaryInsuranceInsurancePlanTypeEnum = exports.PatientSecondaryInsurance = exports.PatientSecondaryInsuranceSubscriberStateEnum = exports.PatientSecondaryInsuranceSubscriberGenderEnum = exports.PatientSecondaryInsuranceSubscriberCountryEnum = exports.PatientSecondaryInsurancePatientRelationshipToSubscriberEnum = exports.PatientSecondaryInsuranceInsurancePlanTypeEnum = exports.PatientPatient = exports.PatientPatientSpecialtyEnum = exports.PatientPatientProviderQualifierEnum = exports.PatientRaceEnum = exports.PatientPrimaryInsurance = exports.PatientPrimaryInsuranceSubscriberStateEnum = exports.PatientPrimaryInsuranceSubscriberGenderEnum = exports.PatientPrimaryInsuranceSubscriberCountryEnum = exports.PatientPrimaryInsurancePatientRelationshipToSubscriberEnum = exports.PatientPrimaryInsuranceInsurancePlanTypeEnum = exports.PatientPreferredLanguageEnum = exports.PatientPatientStatusEnum = exports.PatientPatientPaymentProfileEnum = exports.PatientPatientFlag = exports.PatientPatientFlagType = exports.PatientGenderEnum = exports.PatientEthnicityEnum = exports.PatientCustomPatientFieldValue = exports.PatientAutoAccidentInsurance = exports.PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum = exports.PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum = exports.PatientAutoAccidentInsuranceAutoAccidentSignificantInjuryEnum = exports.PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum = exports.PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum = exports.PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum;
(function (PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum) {
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Al"] = "AL";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ak"] = "AK";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["As"] = "AS";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Az"] = "AZ";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ar"] = "AR";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Aa"] = "AA";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ae"] = "AE";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ap"] = "AP";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ca"] = "CA";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Co"] = "CO";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ct"] = "CT";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["De"] = "DE";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Dc"] = "DC";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Fl"] = "FL";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ga"] = "GA";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Gu"] = "GU";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Hi"] = "HI";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Id"] = "ID";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Il"] = "IL";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["In"] = "IN";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ia"] = "IA";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ks"] = "KS";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ky"] = "KY";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["La"] = "LA";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Me"] = "ME";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Md"] = "MD";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ma"] = "MA";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Mi"] = "MI";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Mn"] = "MN";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ms"] = "MS";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Mo"] = "MO";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Mt"] = "MT";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ne"] = "NE";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Nv"] = "NV";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Nh"] = "NH";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Nj"] = "NJ";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Nm"] = "NM";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ny"] = "NY";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Nc"] = "NC";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Nd"] = "ND";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Mp"] = "MP";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Oh"] = "OH";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ok"] = "OK";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Or"] = "OR";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Pa"] = "PA";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Pr"] = "PR";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ri"] = "RI";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Sc"] = "SC";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Sd"] = "SD";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Tn"] = "TN";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Tx"] = "TX";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Ut"] = "UT";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Vt"] = "VT";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Vi"] = "VI";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Va"] = "VA";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Wa"] = "WA";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Wv"] = "WV";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Wi"] = "WI";
    PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum["Wy"] = "WY";
})(PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum = exports.PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum || (exports.PatientAutoAccidentInsuranceAutoAccidentClaimRepStateEnum = {}));
var PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum;
(function (PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum) {
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Unknown"] = "";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["One"] = "01";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Four"] = "04";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Five"] = "05";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Seven"] = "07";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Ten"] = "10";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Fifteen"] = "15";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Seventeen"] = "17";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Nineteen"] = "19";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Twenty"] = "20";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["TwentyOne"] = "21";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["TwentyTwo"] = "22";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["TwentyThree"] = "23";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["TwentyFour"] = "24";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["TwentyNine"] = "29";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["ThirtyTwo"] = "32";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["ThirtyThree"] = "33";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["ThirtySix"] = "36";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["ThirtyNine"] = "39";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["Forty"] = "40";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["FortyOne"] = "41";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["FortyThree"] = "43";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["FiftyThree"] = "53";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["SeventySix"] = "76";
    PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum["G8"] = "G8";
})(PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum = exports.PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum || (exports.PatientAutoAccidentInsuranceAutoAccidentPatientRelationshipToSubscriberEnum = {}));
var PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum;
(function (PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum) {
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Al"] = "AL";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ak"] = "AK";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["As"] = "AS";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Az"] = "AZ";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ar"] = "AR";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Aa"] = "AA";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ae"] = "AE";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ap"] = "AP";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ca"] = "CA";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Co"] = "CO";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ct"] = "CT";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["De"] = "DE";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Dc"] = "DC";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Fl"] = "FL";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ga"] = "GA";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Gu"] = "GU";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Hi"] = "HI";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Id"] = "ID";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Il"] = "IL";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["In"] = "IN";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ia"] = "IA";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ks"] = "KS";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ky"] = "KY";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["La"] = "LA";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Me"] = "ME";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Md"] = "MD";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ma"] = "MA";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Mi"] = "MI";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Mn"] = "MN";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ms"] = "MS";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Mo"] = "MO";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Mt"] = "MT";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ne"] = "NE";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Nv"] = "NV";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Nh"] = "NH";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Nj"] = "NJ";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Nm"] = "NM";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ny"] = "NY";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Nc"] = "NC";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Nd"] = "ND";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Mp"] = "MP";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Oh"] = "OH";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ok"] = "OK";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Or"] = "OR";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Pa"] = "PA";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Pr"] = "PR";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ri"] = "RI";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Sc"] = "SC";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Sd"] = "SD";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Tn"] = "TN";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Tx"] = "TX";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Ut"] = "UT";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Vt"] = "VT";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Vi"] = "VI";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Va"] = "VA";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Wa"] = "WA";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Wv"] = "WV";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Wi"] = "WI";
    PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum["Wy"] = "WY";
})(PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum = exports.PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum || (exports.PatientAutoAccidentInsuranceAutoAccidentPayerStateEnum = {}));
var PatientAutoAccidentInsuranceAutoAccidentSignificantInjuryEnum;
(function (PatientAutoAccidentInsuranceAutoAccidentSignificantInjuryEnum) {
    PatientAutoAccidentInsuranceAutoAccidentSignificantInjuryEnum["Yes"] = "YES";
    PatientAutoAccidentInsuranceAutoAccidentSignificantInjuryEnum["No"] = "NO";
    PatientAutoAccidentInsuranceAutoAccidentSignificantInjuryEnum["NA"] = "NA";
})(PatientAutoAccidentInsuranceAutoAccidentSignificantInjuryEnum = exports.PatientAutoAccidentInsuranceAutoAccidentSignificantInjuryEnum || (exports.PatientAutoAccidentInsuranceAutoAccidentSignificantInjuryEnum = {}));
var PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum;
(function (PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum) {
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Al"] = "AL";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ak"] = "AK";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["As"] = "AS";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Az"] = "AZ";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ar"] = "AR";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Aa"] = "AA";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ae"] = "AE";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ap"] = "AP";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ca"] = "CA";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Co"] = "CO";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ct"] = "CT";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["De"] = "DE";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Dc"] = "DC";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Fl"] = "FL";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ga"] = "GA";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Gu"] = "GU";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Hi"] = "HI";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Id"] = "ID";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Il"] = "IL";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["In"] = "IN";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ia"] = "IA";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ks"] = "KS";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ky"] = "KY";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["La"] = "LA";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Me"] = "ME";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Md"] = "MD";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ma"] = "MA";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Mi"] = "MI";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Mn"] = "MN";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ms"] = "MS";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Mo"] = "MO";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Mt"] = "MT";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ne"] = "NE";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Nv"] = "NV";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Nh"] = "NH";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Nj"] = "NJ";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Nm"] = "NM";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ny"] = "NY";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Nc"] = "NC";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Nd"] = "ND";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Mp"] = "MP";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Oh"] = "OH";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ok"] = "OK";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Or"] = "OR";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Pa"] = "PA";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Pr"] = "PR";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ri"] = "RI";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Sc"] = "SC";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Sd"] = "SD";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Tn"] = "TN";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Tx"] = "TX";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Ut"] = "UT";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Vt"] = "VT";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Vi"] = "VI";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Va"] = "VA";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Wa"] = "WA";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Wv"] = "WV";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Wi"] = "WI";
    PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum["Wy"] = "WY";
})(PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum = exports.PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum || (exports.PatientAutoAccidentInsuranceAutoAccidentStateOfOccurrenceEnum = {}));
var PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum;
(function (PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum) {
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Al"] = "AL";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ak"] = "AK";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["As"] = "AS";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Az"] = "AZ";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ar"] = "AR";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Aa"] = "AA";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ae"] = "AE";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ap"] = "AP";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ca"] = "CA";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Co"] = "CO";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ct"] = "CT";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["De"] = "DE";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Dc"] = "DC";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Fl"] = "FL";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ga"] = "GA";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Gu"] = "GU";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Hi"] = "HI";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Id"] = "ID";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Il"] = "IL";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["In"] = "IN";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ia"] = "IA";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ks"] = "KS";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ky"] = "KY";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["La"] = "LA";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Me"] = "ME";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Md"] = "MD";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ma"] = "MA";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Mi"] = "MI";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Mn"] = "MN";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ms"] = "MS";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Mo"] = "MO";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Mt"] = "MT";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ne"] = "NE";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Nv"] = "NV";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Nh"] = "NH";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Nj"] = "NJ";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Nm"] = "NM";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ny"] = "NY";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Nc"] = "NC";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Nd"] = "ND";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Mp"] = "MP";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Oh"] = "OH";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ok"] = "OK";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Or"] = "OR";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Pa"] = "PA";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Pr"] = "PR";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ri"] = "RI";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Sc"] = "SC";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Sd"] = "SD";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Tn"] = "TN";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Tx"] = "TX";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Ut"] = "UT";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Vt"] = "VT";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Vi"] = "VI";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Va"] = "VA";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Wa"] = "WA";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Wv"] = "WV";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Wi"] = "WI";
    PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum["Wy"] = "WY";
})(PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum = exports.PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum || (exports.PatientAutoAccidentInsuranceAutoAccidentSubscriberStateEnum = {}));
var PatientAutoAccidentInsurance = /** @class */ (function (_super) {
    __extends(PatientAutoAccidentInsurance, _super);
    function PatientAutoAccidentInsurance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_case_number" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentCaseNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_claim_rep_address" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentClaimRepAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_claim_rep_city" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentClaimRepCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_claim_rep_is_insurer" }),
        __metadata("design:type", Boolean)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentClaimRepIsInsurer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_claim_rep_name" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentClaimRepName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_claim_rep_state" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentClaimRepState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_claim_rep_zip" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentClaimRepZip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_company" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentCompany", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_date_of_accident" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentDateOfAccident", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_disabled_from_date" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentDisabledFromDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_disabled_to_date" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentDisabledToDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_had_similar_condition" }),
        __metadata("design:type", Boolean)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentHadSimilarCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_is_subscriber_the_patient" }),
        __metadata("design:type", Boolean)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentIsSubscriberThePatient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_notes" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_patient_relationship_to_subscriber" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentPatientRelationshipToSubscriber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_payer_address" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentPayerAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_payer_city" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentPayerCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_payer_id" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentPayerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_payer_state" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentPayerState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_payer_zip" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentPayerZip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_policy_number" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentPolicyNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_return_to_work_date" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentReturnToWorkDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_significant_injury" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSignificantInjury", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_significant_injury_notes" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSignificantInjuryNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_similar_condition_date" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSimilarConditionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_similar_condition_notes" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSimilarConditionNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_state_of_occurrence" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentStateOfOccurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_still_under_care" }),
        __metadata("design:type", Boolean)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentStillUnderCare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_address" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_city" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_date_of_birth" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberDateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_first_name" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_last_name" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_middle_name" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberMiddleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_phone_number" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberPhoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_social_security" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberSocialSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_state" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_suffix" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberSuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_subscriber_zip_code" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentSubscriberZipCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_treatment_duration" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentTreatmentDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_will_require_therapy" }),
        __metadata("design:type", Boolean)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentWillRequireTherapy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_will_require_therapy_rec" }),
        __metadata("design:type", String)
    ], PatientAutoAccidentInsurance.prototype, "autoAccidentWillRequireTherapyRec", void 0);
    return PatientAutoAccidentInsurance;
}(utils_1.SpeakeasyBase));
exports.PatientAutoAccidentInsurance = PatientAutoAccidentInsurance;
// PatientCustomPatientFieldValue
/**
 * Custom demographic values the patient has
**/
var PatientCustomPatientFieldValue = /** @class */ (function (_super) {
    __extends(PatientCustomPatientFieldValue, _super);
    function PatientCustomPatientFieldValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field_type" }),
        __metadata("design:type", Number)
    ], PatientCustomPatientFieldValue.prototype, "fieldType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], PatientCustomPatientFieldValue.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PatientCustomPatientFieldValue.prototype, "value", void 0);
    return PatientCustomPatientFieldValue;
}(utils_1.SpeakeasyBase));
exports.PatientCustomPatientFieldValue = PatientCustomPatientFieldValue;
var PatientEthnicityEnum;
(function (PatientEthnicityEnum) {
    PatientEthnicityEnum["Blank"] = "blank";
    PatientEthnicityEnum["Hispanic"] = "hispanic";
    PatientEthnicityEnum["NotHispanic"] = "not_hispanic";
    PatientEthnicityEnum["Declined"] = "declined";
})(PatientEthnicityEnum = exports.PatientEthnicityEnum || (exports.PatientEthnicityEnum = {}));
var PatientGenderEnum;
(function (PatientGenderEnum) {
    PatientGenderEnum["Unknown"] = "";
    PatientGenderEnum["Male"] = "Male";
    PatientGenderEnum["Female"] = "Female";
    PatientGenderEnum["Other"] = "Other";
    PatientGenderEnum["Unk"] = "UNK";
    PatientGenderEnum["Asku"] = "ASKU";
})(PatientGenderEnum = exports.PatientGenderEnum || (exports.PatientGenderEnum = {}));
// PatientPatientFlagType
/**
 * Array of patien flag type objects
**/
var PatientPatientFlagType = /** @class */ (function (_super) {
    __extends(PatientPatientFlagType, _super);
    function PatientPatientFlagType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], PatientPatientFlagType.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], PatientPatientFlagType.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PatientPatientFlagType.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", Number)
    ], PatientPatientFlagType.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PatientPatientFlagType.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatientPatientFlagType.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], PatientPatientFlagType.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], PatientPatientFlagType.prototype, "updatedAt", void 0);
    return PatientPatientFlagType;
}(utils_1.SpeakeasyBase));
exports.PatientPatientFlagType = PatientPatientFlagType;
// PatientPatientFlag
/**
 * Array of patient flag objects
**/
var PatientPatientFlag = /** @class */ (function (_super) {
    __extends(PatientPatientFlag, _super);
    function PatientPatientFlag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], PatientPatientFlag.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], PatientPatientFlag.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flag_text" }),
        __metadata("design:type", String)
    ], PatientPatientFlag.prototype, "flagText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flag_type" }),
        __metadata("design:type", Number)
    ], PatientPatientFlag.prototype, "flagType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PatientPatientFlag.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], PatientPatientFlag.prototype, "updatedAt", void 0);
    return PatientPatientFlag;
}(utils_1.SpeakeasyBase));
exports.PatientPatientFlag = PatientPatientFlag;
var PatientPatientPaymentProfileEnum;
(function (PatientPatientPaymentProfileEnum) {
    PatientPatientPaymentProfileEnum["Unknown"] = "";
    PatientPatientPaymentProfileEnum["Cash"] = "Cash";
    PatientPatientPaymentProfileEnum["Insurance"] = "Insurance";
    PatientPatientPaymentProfileEnum["InsuranceOutOfNetwork"] = "Insurance Out of Network";
    PatientPatientPaymentProfileEnum["AutoAccident"] = "Auto Accident";
    PatientPatientPaymentProfileEnum["WorkerSComp"] = "Worker's Comp";
})(PatientPatientPaymentProfileEnum = exports.PatientPatientPaymentProfileEnum || (exports.PatientPatientPaymentProfileEnum = {}));
var PatientPatientStatusEnum;
(function (PatientPatientStatusEnum) {
    PatientPatientStatusEnum["A"] = "A";
    PatientPatientStatusEnum["I"] = "I";
    PatientPatientStatusEnum["D"] = "D";
})(PatientPatientStatusEnum = exports.PatientPatientStatusEnum || (exports.PatientPatientStatusEnum = {}));
var PatientPreferredLanguageEnum;
(function (PatientPreferredLanguageEnum) {
    PatientPreferredLanguageEnum["Blank"] = "blank";
    PatientPreferredLanguageEnum["Eng"] = "eng";
    PatientPreferredLanguageEnum["Zho"] = "zho";
    PatientPreferredLanguageEnum["Fra"] = "fra";
    PatientPreferredLanguageEnum["Ita"] = "ita";
    PatientPreferredLanguageEnum["Jpn"] = "jpn";
    PatientPreferredLanguageEnum["Por"] = "por";
    PatientPreferredLanguageEnum["Rus"] = "rus";
    PatientPreferredLanguageEnum["Spa"] = "spa";
    PatientPreferredLanguageEnum["Other"] = "other";
    PatientPreferredLanguageEnum["Unknown"] = "unknown";
    PatientPreferredLanguageEnum["Declined"] = "declined";
})(PatientPreferredLanguageEnum = exports.PatientPreferredLanguageEnum || (exports.PatientPreferredLanguageEnum = {}));
var PatientPrimaryInsuranceInsurancePlanTypeEnum;
(function (PatientPrimaryInsuranceInsurancePlanTypeEnum) {
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Unknown"] = "";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Am"] = "AM";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Bl"] = "BL";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Ch"] = "CH";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Ci"] = "CI";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Seventeen"] = "17";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Ds"] = "DS";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Fourteen"] = "14";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Fi"] = "FI";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Hm"] = "HM";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Sixteen"] = "16";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Fifteen"] = "15";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Lm"] = "LM";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Mc"] = "MC";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Ma"] = "MA";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Mb"] = "MB";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Zz"] = "ZZ";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Of"] = "OF";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Eleven"] = "11";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Thirteen"] = "13";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Twelve"] = "12";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Tv"] = "TV";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Va"] = "VA";
    PatientPrimaryInsuranceInsurancePlanTypeEnum["Wc"] = "WC";
})(PatientPrimaryInsuranceInsurancePlanTypeEnum = exports.PatientPrimaryInsuranceInsurancePlanTypeEnum || (exports.PatientPrimaryInsuranceInsurancePlanTypeEnum = {}));
var PatientPrimaryInsurancePatientRelationshipToSubscriberEnum;
(function (PatientPrimaryInsurancePatientRelationshipToSubscriberEnum) {
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Unknown"] = "";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["One"] = "01";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Four"] = "04";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Five"] = "05";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Seven"] = "07";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Ten"] = "10";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Fifteen"] = "15";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Seventeen"] = "17";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Nineteen"] = "19";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Twenty"] = "20";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["TwentyOne"] = "21";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["TwentyTwo"] = "22";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["TwentyThree"] = "23";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["TwentyFour"] = "24";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["TwentyNine"] = "29";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["ThirtyTwo"] = "32";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["ThirtyThree"] = "33";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["ThirtySix"] = "36";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["ThirtyNine"] = "39";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["Forty"] = "40";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["FortyOne"] = "41";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["FortyThree"] = "43";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["FiftyThree"] = "53";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["SeventySix"] = "76";
    PatientPrimaryInsurancePatientRelationshipToSubscriberEnum["G8"] = "G8";
})(PatientPrimaryInsurancePatientRelationshipToSubscriberEnum = exports.PatientPrimaryInsurancePatientRelationshipToSubscriberEnum || (exports.PatientPrimaryInsurancePatientRelationshipToSubscriberEnum = {}));
var PatientPrimaryInsuranceSubscriberCountryEnum;
(function (PatientPrimaryInsuranceSubscriberCountryEnum) {
    PatientPrimaryInsuranceSubscriberCountryEnum["Unknown"] = "";
    PatientPrimaryInsuranceSubscriberCountryEnum["Af"] = "AF";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ax"] = "AX";
    PatientPrimaryInsuranceSubscriberCountryEnum["Al"] = "AL";
    PatientPrimaryInsuranceSubscriberCountryEnum["Dz"] = "DZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["As"] = "AS";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ad"] = "AD";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ao"] = "AO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ai"] = "AI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Aq"] = "AQ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ag"] = "AG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ar"] = "AR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Am"] = "AM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Aw"] = "AW";
    PatientPrimaryInsuranceSubscriberCountryEnum["Au"] = "AU";
    PatientPrimaryInsuranceSubscriberCountryEnum["At"] = "AT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Az"] = "AZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bs"] = "BS";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bh"] = "BH";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bd"] = "BD";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bb"] = "BB";
    PatientPrimaryInsuranceSubscriberCountryEnum["By"] = "BY";
    PatientPrimaryInsuranceSubscriberCountryEnum["Be"] = "BE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bz"] = "BZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bj"] = "BJ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bm"] = "BM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bt"] = "BT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bo"] = "BO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bq"] = "BQ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ba"] = "BA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bw"] = "BW";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bv"] = "BV";
    PatientPrimaryInsuranceSubscriberCountryEnum["Br"] = "BR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Io"] = "IO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bn"] = "BN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bg"] = "BG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bf"] = "BF";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bi"] = "BI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Kh"] = "KH";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cm"] = "CM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ca"] = "CA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cv"] = "CV";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ky"] = "KY";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cf"] = "CF";
    PatientPrimaryInsuranceSubscriberCountryEnum["Td"] = "TD";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cl"] = "CL";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cn"] = "CN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cx"] = "CX";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cc"] = "CC";
    PatientPrimaryInsuranceSubscriberCountryEnum["Co"] = "CO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Km"] = "KM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cg"] = "CG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cd"] = "CD";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ck"] = "CK";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cr"] = "CR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ci"] = "CI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Hr"] = "HR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cu"] = "CU";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cw"] = "CW";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cy"] = "CY";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cz"] = "CZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Cym"] = "CYM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Dk"] = "DK";
    PatientPrimaryInsuranceSubscriberCountryEnum["Dj"] = "DJ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Dm"] = "DM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Do"] = "DO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ec"] = "EC";
    PatientPrimaryInsuranceSubscriberCountryEnum["Eg"] = "EG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sv"] = "SV";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gq"] = "GQ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Er"] = "ER";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ee"] = "EE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Et"] = "ET";
    PatientPrimaryInsuranceSubscriberCountryEnum["Fk"] = "FK";
    PatientPrimaryInsuranceSubscriberCountryEnum["Fo"] = "FO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Fj"] = "FJ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Fi"] = "FI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Fr"] = "FR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gf"] = "GF";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pf"] = "PF";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tf"] = "TF";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ga"] = "GA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gm"] = "GM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ge"] = "GE";
    PatientPrimaryInsuranceSubscriberCountryEnum["De"] = "DE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gh"] = "GH";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gi"] = "GI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gr"] = "GR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gl"] = "GL";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gd"] = "GD";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gp"] = "GP";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gu"] = "GU";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gt"] = "GT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gg"] = "GG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gn"] = "GN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gw"] = "GW";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gy"] = "GY";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ht"] = "HT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Hm"] = "HM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Va"] = "VA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Hn"] = "HN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Hk"] = "HK";
    PatientPrimaryInsuranceSubscriberCountryEnum["Hu"] = "HU";
    PatientPrimaryInsuranceSubscriberCountryEnum["Is"] = "IS";
    PatientPrimaryInsuranceSubscriberCountryEnum["In"] = "IN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Id"] = "ID";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ir"] = "IR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Iq"] = "IQ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ie"] = "IE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Im"] = "IM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Il"] = "IL";
    PatientPrimaryInsuranceSubscriberCountryEnum["It"] = "IT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Jm"] = "JM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Jp"] = "JP";
    PatientPrimaryInsuranceSubscriberCountryEnum["Je"] = "JE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Jo"] = "JO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Kz"] = "KZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ke"] = "KE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ki"] = "KI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Kp"] = "KP";
    PatientPrimaryInsuranceSubscriberCountryEnum["Kr"] = "KR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Xk"] = "XK";
    PatientPrimaryInsuranceSubscriberCountryEnum["Kw"] = "KW";
    PatientPrimaryInsuranceSubscriberCountryEnum["Kg"] = "KG";
    PatientPrimaryInsuranceSubscriberCountryEnum["La"] = "LA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Lv"] = "LV";
    PatientPrimaryInsuranceSubscriberCountryEnum["Lb"] = "LB";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ls"] = "LS";
    PatientPrimaryInsuranceSubscriberCountryEnum["Lr"] = "LR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ly"] = "LY";
    PatientPrimaryInsuranceSubscriberCountryEnum["Li"] = "LI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Lt"] = "LT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Lu"] = "LU";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mo"] = "MO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mk"] = "MK";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mg"] = "MG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mw"] = "MW";
    PatientPrimaryInsuranceSubscriberCountryEnum["My"] = "MY";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mv"] = "MV";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ml"] = "ML";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mt"] = "MT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mh"] = "MH";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mq"] = "MQ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mr"] = "MR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mu"] = "MU";
    PatientPrimaryInsuranceSubscriberCountryEnum["Yt"] = "YT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mx"] = "MX";
    PatientPrimaryInsuranceSubscriberCountryEnum["Fm"] = "FM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Md"] = "MD";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mc"] = "MC";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mn"] = "MN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Me"] = "ME";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ms"] = "MS";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ma"] = "MA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mz"] = "MZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mm"] = "MM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Na"] = "NA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Nr"] = "NR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Np"] = "NP";
    PatientPrimaryInsuranceSubscriberCountryEnum["Nl"] = "NL";
    PatientPrimaryInsuranceSubscriberCountryEnum["Nc"] = "NC";
    PatientPrimaryInsuranceSubscriberCountryEnum["Nz"] = "NZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ni"] = "NI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ne"] = "NE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ng"] = "NG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Nu"] = "NU";
    PatientPrimaryInsuranceSubscriberCountryEnum["Nf"] = "NF";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mp"] = "MP";
    PatientPrimaryInsuranceSubscriberCountryEnum["No"] = "NO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Om"] = "OM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pk"] = "PK";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pw"] = "PW";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ps"] = "PS";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pa"] = "PA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pg"] = "PG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Py"] = "PY";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pe"] = "PE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ph"] = "PH";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pn"] = "PN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pl"] = "PL";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pt"] = "PT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pr"] = "PR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Qa"] = "QA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Re"] = "RE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ro"] = "RO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ru"] = "RU";
    PatientPrimaryInsuranceSubscriberCountryEnum["Rw"] = "RW";
    PatientPrimaryInsuranceSubscriberCountryEnum["Bl"] = "BL";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sh"] = "SH";
    PatientPrimaryInsuranceSubscriberCountryEnum["Kn"] = "KN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Lc"] = "LC";
    PatientPrimaryInsuranceSubscriberCountryEnum["Mf"] = "MF";
    PatientPrimaryInsuranceSubscriberCountryEnum["Pm"] = "PM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Vc"] = "VC";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ws"] = "WS";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sm"] = "SM";
    PatientPrimaryInsuranceSubscriberCountryEnum["St"] = "ST";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sa"] = "SA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sn"] = "SN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Rs"] = "RS";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sc"] = "SC";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sl"] = "SL";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sg"] = "SG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sx"] = "SX";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sk"] = "SK";
    PatientPrimaryInsuranceSubscriberCountryEnum["Si"] = "SI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sb"] = "SB";
    PatientPrimaryInsuranceSubscriberCountryEnum["So"] = "SO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Za"] = "ZA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gs"] = "GS";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ss"] = "SS";
    PatientPrimaryInsuranceSubscriberCountryEnum["Es"] = "ES";
    PatientPrimaryInsuranceSubscriberCountryEnum["Lk"] = "LK";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sd"] = "SD";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sr"] = "SR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sj"] = "SJ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sz"] = "SZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Se"] = "SE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ch"] = "CH";
    PatientPrimaryInsuranceSubscriberCountryEnum["Sy"] = "SY";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tw"] = "TW";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tj"] = "TJ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tz"] = "TZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Th"] = "TH";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tl"] = "TL";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tg"] = "TG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tk"] = "TK";
    PatientPrimaryInsuranceSubscriberCountryEnum["To"] = "TO";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tt"] = "TT";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tn"] = "TN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tr"] = "TR";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tm"] = "TM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tc"] = "TC";
    PatientPrimaryInsuranceSubscriberCountryEnum["Tv"] = "TV";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ug"] = "UG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ua"] = "UA";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ae"] = "AE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Gb"] = "GB";
    PatientPrimaryInsuranceSubscriberCountryEnum["Us"] = "US";
    PatientPrimaryInsuranceSubscriberCountryEnum["Um"] = "UM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Uy"] = "UY";
    PatientPrimaryInsuranceSubscriberCountryEnum["Uz"] = "UZ";
    PatientPrimaryInsuranceSubscriberCountryEnum["Vu"] = "VU";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ve"] = "VE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Vn"] = "VN";
    PatientPrimaryInsuranceSubscriberCountryEnum["Vg"] = "VG";
    PatientPrimaryInsuranceSubscriberCountryEnum["Vi"] = "VI";
    PatientPrimaryInsuranceSubscriberCountryEnum["Wf"] = "WF";
    PatientPrimaryInsuranceSubscriberCountryEnum["Eh"] = "EH";
    PatientPrimaryInsuranceSubscriberCountryEnum["Ye"] = "YE";
    PatientPrimaryInsuranceSubscriberCountryEnum["Zm"] = "ZM";
    PatientPrimaryInsuranceSubscriberCountryEnum["Zw"] = "ZW";
})(PatientPrimaryInsuranceSubscriberCountryEnum = exports.PatientPrimaryInsuranceSubscriberCountryEnum || (exports.PatientPrimaryInsuranceSubscriberCountryEnum = {}));
var PatientPrimaryInsuranceSubscriberGenderEnum;
(function (PatientPrimaryInsuranceSubscriberGenderEnum) {
    PatientPrimaryInsuranceSubscriberGenderEnum["Unknown"] = "";
    PatientPrimaryInsuranceSubscriberGenderEnum["Male"] = "Male";
    PatientPrimaryInsuranceSubscriberGenderEnum["Female"] = "Female";
    PatientPrimaryInsuranceSubscriberGenderEnum["Other"] = "Other";
    PatientPrimaryInsuranceSubscriberGenderEnum["Unk"] = "UNK";
    PatientPrimaryInsuranceSubscriberGenderEnum["Asku"] = "ASKU";
})(PatientPrimaryInsuranceSubscriberGenderEnum = exports.PatientPrimaryInsuranceSubscriberGenderEnum || (exports.PatientPrimaryInsuranceSubscriberGenderEnum = {}));
var PatientPrimaryInsuranceSubscriberStateEnum;
(function (PatientPrimaryInsuranceSubscriberStateEnum) {
    PatientPrimaryInsuranceSubscriberStateEnum["Al"] = "AL";
    PatientPrimaryInsuranceSubscriberStateEnum["Ak"] = "AK";
    PatientPrimaryInsuranceSubscriberStateEnum["As"] = "AS";
    PatientPrimaryInsuranceSubscriberStateEnum["Az"] = "AZ";
    PatientPrimaryInsuranceSubscriberStateEnum["Ar"] = "AR";
    PatientPrimaryInsuranceSubscriberStateEnum["Aa"] = "AA";
    PatientPrimaryInsuranceSubscriberStateEnum["Ae"] = "AE";
    PatientPrimaryInsuranceSubscriberStateEnum["Ap"] = "AP";
    PatientPrimaryInsuranceSubscriberStateEnum["Ca"] = "CA";
    PatientPrimaryInsuranceSubscriberStateEnum["Co"] = "CO";
    PatientPrimaryInsuranceSubscriberStateEnum["Ct"] = "CT";
    PatientPrimaryInsuranceSubscriberStateEnum["De"] = "DE";
    PatientPrimaryInsuranceSubscriberStateEnum["Dc"] = "DC";
    PatientPrimaryInsuranceSubscriberStateEnum["Fl"] = "FL";
    PatientPrimaryInsuranceSubscriberStateEnum["Ga"] = "GA";
    PatientPrimaryInsuranceSubscriberStateEnum["Gu"] = "GU";
    PatientPrimaryInsuranceSubscriberStateEnum["Hi"] = "HI";
    PatientPrimaryInsuranceSubscriberStateEnum["Id"] = "ID";
    PatientPrimaryInsuranceSubscriberStateEnum["Il"] = "IL";
    PatientPrimaryInsuranceSubscriberStateEnum["In"] = "IN";
    PatientPrimaryInsuranceSubscriberStateEnum["Ia"] = "IA";
    PatientPrimaryInsuranceSubscriberStateEnum["Ks"] = "KS";
    PatientPrimaryInsuranceSubscriberStateEnum["Ky"] = "KY";
    PatientPrimaryInsuranceSubscriberStateEnum["La"] = "LA";
    PatientPrimaryInsuranceSubscriberStateEnum["Me"] = "ME";
    PatientPrimaryInsuranceSubscriberStateEnum["Md"] = "MD";
    PatientPrimaryInsuranceSubscriberStateEnum["Ma"] = "MA";
    PatientPrimaryInsuranceSubscriberStateEnum["Mi"] = "MI";
    PatientPrimaryInsuranceSubscriberStateEnum["Mn"] = "MN";
    PatientPrimaryInsuranceSubscriberStateEnum["Ms"] = "MS";
    PatientPrimaryInsuranceSubscriberStateEnum["Mo"] = "MO";
    PatientPrimaryInsuranceSubscriberStateEnum["Mt"] = "MT";
    PatientPrimaryInsuranceSubscriberStateEnum["Ne"] = "NE";
    PatientPrimaryInsuranceSubscriberStateEnum["Nv"] = "NV";
    PatientPrimaryInsuranceSubscriberStateEnum["Nh"] = "NH";
    PatientPrimaryInsuranceSubscriberStateEnum["Nj"] = "NJ";
    PatientPrimaryInsuranceSubscriberStateEnum["Nm"] = "NM";
    PatientPrimaryInsuranceSubscriberStateEnum["Ny"] = "NY";
    PatientPrimaryInsuranceSubscriberStateEnum["Nc"] = "NC";
    PatientPrimaryInsuranceSubscriberStateEnum["Nd"] = "ND";
    PatientPrimaryInsuranceSubscriberStateEnum["Mp"] = "MP";
    PatientPrimaryInsuranceSubscriberStateEnum["Oh"] = "OH";
    PatientPrimaryInsuranceSubscriberStateEnum["Ok"] = "OK";
    PatientPrimaryInsuranceSubscriberStateEnum["Or"] = "OR";
    PatientPrimaryInsuranceSubscriberStateEnum["Pa"] = "PA";
    PatientPrimaryInsuranceSubscriberStateEnum["Pr"] = "PR";
    PatientPrimaryInsuranceSubscriberStateEnum["Ri"] = "RI";
    PatientPrimaryInsuranceSubscriberStateEnum["Sc"] = "SC";
    PatientPrimaryInsuranceSubscriberStateEnum["Sd"] = "SD";
    PatientPrimaryInsuranceSubscriberStateEnum["Tn"] = "TN";
    PatientPrimaryInsuranceSubscriberStateEnum["Tx"] = "TX";
    PatientPrimaryInsuranceSubscriberStateEnum["Ut"] = "UT";
    PatientPrimaryInsuranceSubscriberStateEnum["Vt"] = "VT";
    PatientPrimaryInsuranceSubscriberStateEnum["Vi"] = "VI";
    PatientPrimaryInsuranceSubscriberStateEnum["Va"] = "VA";
    PatientPrimaryInsuranceSubscriberStateEnum["Wa"] = "WA";
    PatientPrimaryInsuranceSubscriberStateEnum["Wv"] = "WV";
    PatientPrimaryInsuranceSubscriberStateEnum["Wi"] = "WI";
    PatientPrimaryInsuranceSubscriberStateEnum["Wy"] = "WY";
})(PatientPrimaryInsuranceSubscriberStateEnum = exports.PatientPrimaryInsuranceSubscriberStateEnum || (exports.PatientPrimaryInsuranceSubscriberStateEnum = {}));
// PatientPrimaryInsurance
/**
 * **Warning:** Changing insurance information may make past appointments unbillable. Insurance data is also **unvalidated**; you should use the [`/api/insurances`](#apiinsurances) endpoint to find the appropriate insurance payer.
**/
var PatientPrimaryInsurance = /** @class */ (function (_super) {
    __extends(PatientPrimaryInsurance, _super);
    function PatientPrimaryInsurance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_claim_office_number" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "insuranceClaimOfficeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_company" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "insuranceCompany", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_group_name" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "insuranceGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_group_number" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "insuranceGroupNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_id_number" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "insuranceIdNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_payer_id" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "insurancePayerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_plan_name" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "insurancePlanName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_plan_type" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "insurancePlanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_subscriber_the_patient" }),
        __metadata("design:type", Boolean)
    ], PatientPrimaryInsurance.prototype, "isSubscriberThePatient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient_relationship_to_subscriber" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "patientRelationshipToSubscriber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=photo_back" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "photoBack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=photo_front" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "photoFront", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_address" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_city" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_country" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_date_of_birth" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberDateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_first_name" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_gender" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberGender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_last_name" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_middle_name" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberMiddleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_social_security" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberSocialSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_state" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_suffix" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberSuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_zip_code" }),
        __metadata("design:type", String)
    ], PatientPrimaryInsurance.prototype, "subscriberZipCode", void 0);
    return PatientPrimaryInsurance;
}(utils_1.SpeakeasyBase));
exports.PatientPrimaryInsurance = PatientPrimaryInsurance;
var PatientRaceEnum;
(function (PatientRaceEnum) {
    PatientRaceEnum["Blank"] = "blank";
    PatientRaceEnum["Indian"] = "indian";
    PatientRaceEnum["Asian"] = "asian";
    PatientRaceEnum["Black"] = "black";
    PatientRaceEnum["Hawaiian"] = "hawaiian";
    PatientRaceEnum["White"] = "white";
    PatientRaceEnum["Other"] = "other";
    PatientRaceEnum["Declined"] = "declined";
})(PatientRaceEnum = exports.PatientRaceEnum || (exports.PatientRaceEnum = {}));
var PatientPatientProviderQualifierEnum;
(function (PatientPatientProviderQualifierEnum) {
    PatientPatientProviderQualifierEnum["Unknown"] = "";
    PatientPatientProviderQualifierEnum["ZeroB"] = "0B";
    PatientPatientProviderQualifierEnum["OneG"] = "1G";
    PatientPatientProviderQualifierEnum["G2"] = "G2";
})(PatientPatientProviderQualifierEnum = exports.PatientPatientProviderQualifierEnum || (exports.PatientPatientProviderQualifierEnum = {}));
var PatientPatientSpecialtyEnum;
(function (PatientPatientSpecialtyEnum) {
    PatientPatientSpecialtyEnum["Unknown"] = "";
    PatientPatientSpecialtyEnum["Acupuncture"] = "Acupuncture";
    PatientPatientSpecialtyEnum["AdvancedPracticeMidwife"] = "Advanced Practice Midwife";
    PatientPatientSpecialtyEnum["AestheticMedicine"] = "Aesthetic Medicine";
    PatientPatientSpecialtyEnum["Aesthetician"] = "Aesthetician";
    PatientPatientSpecialtyEnum["AllergistImmunologist"] = "Allergist/Immunologist";
    PatientPatientSpecialtyEnum["Anesthesiologist"] = "Anesthesiologist";
    PatientPatientSpecialtyEnum["CardiacElectrophysiologist"] = "Cardiac Electrophysiologist";
    PatientPatientSpecialtyEnum["Cardiologist"] = "Cardiologist";
    PatientPatientSpecialtyEnum["CardiothoracicSurgeon"] = "Cardiothoracic Surgeon";
    PatientPatientSpecialtyEnum["ChildAdolescentPsychiatry"] = "Child/Adolescent Psychiatry";
    PatientPatientSpecialtyEnum["Chiropractor"] = "Chiropractor";
    PatientPatientSpecialtyEnum["ClinicalSocialWorker"] = "Clinical Social Worker";
    PatientPatientSpecialtyEnum["ColorectalSurgeon"] = "Colorectal Surgeon";
    PatientPatientSpecialtyEnum["Correactology"] = "Correactology";
    PatientPatientSpecialtyEnum["CosmeticMedicine"] = "Cosmetic Medicine";
    PatientPatientSpecialtyEnum["CounselorMentalHealth"] = "Counselor Mental Health";
    PatientPatientSpecialtyEnum["CounselorProfessional"] = "Counselor Professional";
    PatientPatientSpecialtyEnum["Counselor"] = "Counselor";
    PatientPatientSpecialtyEnum["Dentist"] = "Dentist";
    PatientPatientSpecialtyEnum["Diabetology"] = "Diabetology";
    PatientPatientSpecialtyEnum["Dermatologist"] = "Dermatologist";
    PatientPatientSpecialtyEnum["DiagnosticMedicalSonographer"] = "Diagnostic Medical Sonographer";
    PatientPatientSpecialtyEnum["DietitianRegistered"] = "Dietitian, Registered";
    PatientPatientSpecialtyEnum["EarNoseThroatSpecialistEnt"] = "Ear-Nose-Throat Specialist (ENT)";
    PatientPatientSpecialtyEnum["EmergencyMedicinePhysician"] = "Emergency Medicine Physician";
    PatientPatientSpecialtyEnum["Endocrinologist"] = "Endocrinologist";
    PatientPatientSpecialtyEnum["Endodontist"] = "Endodontist";
    PatientPatientSpecialtyEnum["Epidemiologist"] = "Epidemiologist";
    PatientPatientSpecialtyEnum["FamilyPractitioner"] = "Family Practitioner";
    PatientPatientSpecialtyEnum["Gastroenterologist"] = "Gastroenterologist";
    PatientPatientSpecialtyEnum["GeneralPractice"] = "General Practice";
    PatientPatientSpecialtyEnum["GeneralSurgeon"] = "General Surgeon";
    PatientPatientSpecialtyEnum["Geneticist"] = "Geneticist";
    PatientPatientSpecialtyEnum["Geriatrician"] = "Geriatrician";
    PatientPatientSpecialtyEnum["Gerontologist"] = "Gerontologist";
    PatientPatientSpecialtyEnum["GynecologistNoOb"] = "Gynecologist (no OB)";
    PatientPatientSpecialtyEnum["GynegologicOncologist"] = "Gynegologic Oncologist";
    PatientPatientSpecialtyEnum["HandSurgeon"] = "Hand Surgeon";
    PatientPatientSpecialtyEnum["Hematologist"] = "Hematologist";
    PatientPatientSpecialtyEnum["HomeCare"] = "Home Care";
    PatientPatientSpecialtyEnum["Hospice"] = "Hospice";
    PatientPatientSpecialtyEnum["Hospitalist"] = "Hospitalist";
    PatientPatientSpecialtyEnum["InfectiousDiseaseSpecialist"] = "Infectious Disease Specialist";
    PatientPatientSpecialtyEnum["IntegrativeAndFunctionalMedicine"] = "Integrative and Functional Medicine";
    PatientPatientSpecialtyEnum["IntegrativeMedicine"] = "Integrative Medicine";
    PatientPatientSpecialtyEnum["Internist"] = "Internist";
    PatientPatientSpecialtyEnum["InterventionalRadiology"] = "Interventional Radiology";
    PatientPatientSpecialtyEnum["LaboratoryMedicineSpecialist"] = "Laboratory Medicine Specialist";
    PatientPatientSpecialtyEnum["LaserSurgery"] = "Laser Surgery";
    PatientPatientSpecialtyEnum["MassageTherapist"] = "Massage Therapist";
    PatientPatientSpecialtyEnum["NaturopathicPhysician"] = "Naturopathic Physician";
    PatientPatientSpecialtyEnum["Neonatologist"] = "Neonatologist";
    PatientPatientSpecialtyEnum["Nephrologist"] = "Nephrologist";
    PatientPatientSpecialtyEnum["Neurologist"] = "Neurologist";
    PatientPatientSpecialtyEnum["Neuropsychology"] = "Neuropsychology";
    PatientPatientSpecialtyEnum["Neurosurgeon"] = "Neurosurgeon";
    PatientPatientSpecialtyEnum["NotActivelyPracticing"] = "Not Actively Practicing";
    PatientPatientSpecialtyEnum["NuclearMedicineSpecialist"] = "Nuclear Medicine Specialist";
    PatientPatientSpecialtyEnum["NursePractitioner"] = "Nurse Practitioner";
    PatientPatientSpecialtyEnum["Nursing"] = "Nursing";
    PatientPatientSpecialtyEnum["Nutritionist"] = "Nutritionist";
    PatientPatientSpecialtyEnum["ObstetricianGynecologist"] = "Obstetrician/Gynecologist";
    PatientPatientSpecialtyEnum["OccupationalMedicine"] = "Occupational Medicine";
    PatientPatientSpecialtyEnum["OccupationalTherapist"] = "Occupational Therapist";
    PatientPatientSpecialtyEnum["Oncologist"] = "Oncologist";
    PatientPatientSpecialtyEnum["Ophthalmologist"] = "Ophthalmologist";
    PatientPatientSpecialtyEnum["Optometrist"] = "Optometrist";
    PatientPatientSpecialtyEnum["OralSurgeon"] = "Oral Surgeon";
    PatientPatientSpecialtyEnum["OrofacialPain"] = "Orofacial Pain";
    PatientPatientSpecialtyEnum["Orthodontist"] = "Orthodontist";
    PatientPatientSpecialtyEnum["OrthopedicSurgeon"] = "Orthopedic Surgeon";
    PatientPatientSpecialtyEnum["Orthotist"] = "Orthotist";
    PatientPatientSpecialtyEnum["Other"] = "Other";
    PatientPatientSpecialtyEnum["PainManagementSpecialist"] = "Pain Management Specialist";
    PatientPatientSpecialtyEnum["Pathologist"] = "Pathologist";
    PatientPatientSpecialtyEnum["PediatricDentist"] = "Pediatric Dentist";
    PatientPatientSpecialtyEnum["PediatricGastroenterology"] = "Pediatric Gastroenterology";
    PatientPatientSpecialtyEnum["PediatricSurgeon"] = "Pediatric Surgeon";
    PatientPatientSpecialtyEnum["Pediatrician"] = "Pediatrician";
    PatientPatientSpecialtyEnum["Perinatologist"] = "Perinatologist";
    PatientPatientSpecialtyEnum["Periodontist"] = "Periodontist";
    PatientPatientSpecialtyEnum["PhysicalMedicineAndRehabSpecialist"] = "Physical Medicine and Rehab Specialist";
    PatientPatientSpecialtyEnum["PhysicalTherapist"] = "Physical Therapist";
    PatientPatientSpecialtyEnum["PhysicianAssistant"] = "Physician Assistant";
    PatientPatientSpecialtyEnum["PlasticSurgeon"] = "Plastic Surgeon";
    PatientPatientSpecialtyEnum["Podiatrist"] = "Podiatrist";
    PatientPatientSpecialtyEnum["PreventiveAgingMedicine"] = "Preventive-Aging Medicine";
    PatientPatientSpecialtyEnum["PreventiveMedicineOccupationalEnvironmentalMedicine"] = "Preventive Medicine/Occupational-Environmental Medicine";
    PatientPatientSpecialtyEnum["PrimaryCarePhysician"] = "Primary Care Physician";
    PatientPatientSpecialtyEnum["Prosthetist"] = "Prosthetist";
    PatientPatientSpecialtyEnum["Prosthodontist"] = "Prosthodontist";
    PatientPatientSpecialtyEnum["Psychiatrist"] = "Psychiatrist";
    PatientPatientSpecialtyEnum["Psychologist"] = "Psychologist";
    PatientPatientSpecialtyEnum["PublicHealthProfessional"] = "Public Health Professional";
    PatientPatientSpecialtyEnum["Pulmonologist"] = "Pulmonologist";
    PatientPatientSpecialtyEnum["RadiationOncologist"] = "Radiation Oncologist";
    PatientPatientSpecialtyEnum["Radiologist"] = "Radiologist";
    PatientPatientSpecialtyEnum["RegisteredNurse"] = "Registered Nurse";
    PatientPatientSpecialtyEnum["ReligiousNonmedicalPractitioner"] = "Religious Nonmedical Practitioner";
    PatientPatientSpecialtyEnum["ReproductiveEndocrinologist"] = "Reproductive Endocrinologist";
    PatientPatientSpecialtyEnum["ReproductiveMedicine"] = "Reproductive Medicine";
    PatientPatientSpecialtyEnum["Rheumatologist"] = "Rheumatologist";
    PatientPatientSpecialtyEnum["SleepMedicine"] = "Sleep Medicine";
    PatientPatientSpecialtyEnum["SpeechLanguagePathologist"] = "Speech-Language Pathologist";
    PatientPatientSpecialtyEnum["SportsMedicineSpecialist"] = "Sports Medicine Specialist";
    PatientPatientSpecialtyEnum["Urologist"] = "Urologist";
    PatientPatientSpecialtyEnum["UrgentCare"] = "Urgent Care";
    PatientPatientSpecialtyEnum["VascularSurgeon"] = "Vascular Surgeon";
})(PatientPatientSpecialtyEnum = exports.PatientPatientSpecialtyEnum || (exports.PatientPatientSpecialtyEnum = {}));
var PatientPatient = /** @class */ (function (_super) {
    __extends(PatientPatient, _super);
    function PatientPatient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "fax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "middleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=npi" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "npi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider_number" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "providerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider_qualifier" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "providerQualifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specialty" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "specialty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], PatientPatient.prototype, "suffix", void 0);
    return PatientPatient;
}(utils_1.SpeakeasyBase));
exports.PatientPatient = PatientPatient;
var PatientSecondaryInsuranceInsurancePlanTypeEnum;
(function (PatientSecondaryInsuranceInsurancePlanTypeEnum) {
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Unknown"] = "";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Am"] = "AM";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Bl"] = "BL";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Ch"] = "CH";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Ci"] = "CI";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Seventeen"] = "17";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Ds"] = "DS";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Fourteen"] = "14";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Fi"] = "FI";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Hm"] = "HM";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Sixteen"] = "16";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Fifteen"] = "15";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Lm"] = "LM";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Mc"] = "MC";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Ma"] = "MA";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Mb"] = "MB";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Zz"] = "ZZ";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Of"] = "OF";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Eleven"] = "11";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Thirteen"] = "13";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Twelve"] = "12";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Tv"] = "TV";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Va"] = "VA";
    PatientSecondaryInsuranceInsurancePlanTypeEnum["Wc"] = "WC";
})(PatientSecondaryInsuranceInsurancePlanTypeEnum = exports.PatientSecondaryInsuranceInsurancePlanTypeEnum || (exports.PatientSecondaryInsuranceInsurancePlanTypeEnum = {}));
var PatientSecondaryInsurancePatientRelationshipToSubscriberEnum;
(function (PatientSecondaryInsurancePatientRelationshipToSubscriberEnum) {
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Unknown"] = "";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["One"] = "01";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Four"] = "04";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Five"] = "05";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Seven"] = "07";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Ten"] = "10";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Fifteen"] = "15";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Seventeen"] = "17";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Nineteen"] = "19";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Twenty"] = "20";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["TwentyOne"] = "21";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["TwentyTwo"] = "22";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["TwentyThree"] = "23";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["TwentyFour"] = "24";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["TwentyNine"] = "29";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["ThirtyTwo"] = "32";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["ThirtyThree"] = "33";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["ThirtySix"] = "36";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["ThirtyNine"] = "39";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["Forty"] = "40";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["FortyOne"] = "41";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["FortyThree"] = "43";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["FiftyThree"] = "53";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["SeventySix"] = "76";
    PatientSecondaryInsurancePatientRelationshipToSubscriberEnum["G8"] = "G8";
})(PatientSecondaryInsurancePatientRelationshipToSubscriberEnum = exports.PatientSecondaryInsurancePatientRelationshipToSubscriberEnum || (exports.PatientSecondaryInsurancePatientRelationshipToSubscriberEnum = {}));
var PatientSecondaryInsuranceSubscriberCountryEnum;
(function (PatientSecondaryInsuranceSubscriberCountryEnum) {
    PatientSecondaryInsuranceSubscriberCountryEnum["Unknown"] = "";
    PatientSecondaryInsuranceSubscriberCountryEnum["Af"] = "AF";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ax"] = "AX";
    PatientSecondaryInsuranceSubscriberCountryEnum["Al"] = "AL";
    PatientSecondaryInsuranceSubscriberCountryEnum["Dz"] = "DZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["As"] = "AS";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ad"] = "AD";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ao"] = "AO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ai"] = "AI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Aq"] = "AQ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ag"] = "AG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ar"] = "AR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Am"] = "AM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Aw"] = "AW";
    PatientSecondaryInsuranceSubscriberCountryEnum["Au"] = "AU";
    PatientSecondaryInsuranceSubscriberCountryEnum["At"] = "AT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Az"] = "AZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bs"] = "BS";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bh"] = "BH";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bd"] = "BD";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bb"] = "BB";
    PatientSecondaryInsuranceSubscriberCountryEnum["By"] = "BY";
    PatientSecondaryInsuranceSubscriberCountryEnum["Be"] = "BE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bz"] = "BZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bj"] = "BJ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bm"] = "BM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bt"] = "BT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bo"] = "BO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bq"] = "BQ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ba"] = "BA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bw"] = "BW";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bv"] = "BV";
    PatientSecondaryInsuranceSubscriberCountryEnum["Br"] = "BR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Io"] = "IO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bn"] = "BN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bg"] = "BG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bf"] = "BF";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bi"] = "BI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Kh"] = "KH";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cm"] = "CM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ca"] = "CA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cv"] = "CV";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ky"] = "KY";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cf"] = "CF";
    PatientSecondaryInsuranceSubscriberCountryEnum["Td"] = "TD";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cl"] = "CL";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cn"] = "CN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cx"] = "CX";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cc"] = "CC";
    PatientSecondaryInsuranceSubscriberCountryEnum["Co"] = "CO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Km"] = "KM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cg"] = "CG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cd"] = "CD";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ck"] = "CK";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cr"] = "CR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ci"] = "CI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Hr"] = "HR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cu"] = "CU";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cw"] = "CW";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cy"] = "CY";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cz"] = "CZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Cym"] = "CYM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Dk"] = "DK";
    PatientSecondaryInsuranceSubscriberCountryEnum["Dj"] = "DJ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Dm"] = "DM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Do"] = "DO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ec"] = "EC";
    PatientSecondaryInsuranceSubscriberCountryEnum["Eg"] = "EG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sv"] = "SV";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gq"] = "GQ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Er"] = "ER";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ee"] = "EE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Et"] = "ET";
    PatientSecondaryInsuranceSubscriberCountryEnum["Fk"] = "FK";
    PatientSecondaryInsuranceSubscriberCountryEnum["Fo"] = "FO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Fj"] = "FJ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Fi"] = "FI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Fr"] = "FR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gf"] = "GF";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pf"] = "PF";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tf"] = "TF";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ga"] = "GA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gm"] = "GM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ge"] = "GE";
    PatientSecondaryInsuranceSubscriberCountryEnum["De"] = "DE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gh"] = "GH";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gi"] = "GI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gr"] = "GR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gl"] = "GL";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gd"] = "GD";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gp"] = "GP";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gu"] = "GU";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gt"] = "GT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gg"] = "GG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gn"] = "GN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gw"] = "GW";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gy"] = "GY";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ht"] = "HT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Hm"] = "HM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Va"] = "VA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Hn"] = "HN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Hk"] = "HK";
    PatientSecondaryInsuranceSubscriberCountryEnum["Hu"] = "HU";
    PatientSecondaryInsuranceSubscriberCountryEnum["Is"] = "IS";
    PatientSecondaryInsuranceSubscriberCountryEnum["In"] = "IN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Id"] = "ID";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ir"] = "IR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Iq"] = "IQ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ie"] = "IE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Im"] = "IM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Il"] = "IL";
    PatientSecondaryInsuranceSubscriberCountryEnum["It"] = "IT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Jm"] = "JM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Jp"] = "JP";
    PatientSecondaryInsuranceSubscriberCountryEnum["Je"] = "JE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Jo"] = "JO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Kz"] = "KZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ke"] = "KE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ki"] = "KI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Kp"] = "KP";
    PatientSecondaryInsuranceSubscriberCountryEnum["Kr"] = "KR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Xk"] = "XK";
    PatientSecondaryInsuranceSubscriberCountryEnum["Kw"] = "KW";
    PatientSecondaryInsuranceSubscriberCountryEnum["Kg"] = "KG";
    PatientSecondaryInsuranceSubscriberCountryEnum["La"] = "LA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Lv"] = "LV";
    PatientSecondaryInsuranceSubscriberCountryEnum["Lb"] = "LB";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ls"] = "LS";
    PatientSecondaryInsuranceSubscriberCountryEnum["Lr"] = "LR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ly"] = "LY";
    PatientSecondaryInsuranceSubscriberCountryEnum["Li"] = "LI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Lt"] = "LT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Lu"] = "LU";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mo"] = "MO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mk"] = "MK";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mg"] = "MG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mw"] = "MW";
    PatientSecondaryInsuranceSubscriberCountryEnum["My"] = "MY";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mv"] = "MV";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ml"] = "ML";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mt"] = "MT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mh"] = "MH";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mq"] = "MQ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mr"] = "MR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mu"] = "MU";
    PatientSecondaryInsuranceSubscriberCountryEnum["Yt"] = "YT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mx"] = "MX";
    PatientSecondaryInsuranceSubscriberCountryEnum["Fm"] = "FM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Md"] = "MD";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mc"] = "MC";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mn"] = "MN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Me"] = "ME";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ms"] = "MS";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ma"] = "MA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mz"] = "MZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mm"] = "MM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Na"] = "NA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Nr"] = "NR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Np"] = "NP";
    PatientSecondaryInsuranceSubscriberCountryEnum["Nl"] = "NL";
    PatientSecondaryInsuranceSubscriberCountryEnum["Nc"] = "NC";
    PatientSecondaryInsuranceSubscriberCountryEnum["Nz"] = "NZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ni"] = "NI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ne"] = "NE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ng"] = "NG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Nu"] = "NU";
    PatientSecondaryInsuranceSubscriberCountryEnum["Nf"] = "NF";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mp"] = "MP";
    PatientSecondaryInsuranceSubscriberCountryEnum["No"] = "NO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Om"] = "OM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pk"] = "PK";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pw"] = "PW";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ps"] = "PS";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pa"] = "PA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pg"] = "PG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Py"] = "PY";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pe"] = "PE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ph"] = "PH";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pn"] = "PN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pl"] = "PL";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pt"] = "PT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pr"] = "PR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Qa"] = "QA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Re"] = "RE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ro"] = "RO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ru"] = "RU";
    PatientSecondaryInsuranceSubscriberCountryEnum["Rw"] = "RW";
    PatientSecondaryInsuranceSubscriberCountryEnum["Bl"] = "BL";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sh"] = "SH";
    PatientSecondaryInsuranceSubscriberCountryEnum["Kn"] = "KN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Lc"] = "LC";
    PatientSecondaryInsuranceSubscriberCountryEnum["Mf"] = "MF";
    PatientSecondaryInsuranceSubscriberCountryEnum["Pm"] = "PM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Vc"] = "VC";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ws"] = "WS";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sm"] = "SM";
    PatientSecondaryInsuranceSubscriberCountryEnum["St"] = "ST";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sa"] = "SA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sn"] = "SN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Rs"] = "RS";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sc"] = "SC";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sl"] = "SL";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sg"] = "SG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sx"] = "SX";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sk"] = "SK";
    PatientSecondaryInsuranceSubscriberCountryEnum["Si"] = "SI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sb"] = "SB";
    PatientSecondaryInsuranceSubscriberCountryEnum["So"] = "SO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Za"] = "ZA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gs"] = "GS";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ss"] = "SS";
    PatientSecondaryInsuranceSubscriberCountryEnum["Es"] = "ES";
    PatientSecondaryInsuranceSubscriberCountryEnum["Lk"] = "LK";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sd"] = "SD";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sr"] = "SR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sj"] = "SJ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sz"] = "SZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Se"] = "SE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ch"] = "CH";
    PatientSecondaryInsuranceSubscriberCountryEnum["Sy"] = "SY";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tw"] = "TW";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tj"] = "TJ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tz"] = "TZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Th"] = "TH";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tl"] = "TL";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tg"] = "TG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tk"] = "TK";
    PatientSecondaryInsuranceSubscriberCountryEnum["To"] = "TO";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tt"] = "TT";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tn"] = "TN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tr"] = "TR";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tm"] = "TM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tc"] = "TC";
    PatientSecondaryInsuranceSubscriberCountryEnum["Tv"] = "TV";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ug"] = "UG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ua"] = "UA";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ae"] = "AE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Gb"] = "GB";
    PatientSecondaryInsuranceSubscriberCountryEnum["Us"] = "US";
    PatientSecondaryInsuranceSubscriberCountryEnum["Um"] = "UM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Uy"] = "UY";
    PatientSecondaryInsuranceSubscriberCountryEnum["Uz"] = "UZ";
    PatientSecondaryInsuranceSubscriberCountryEnum["Vu"] = "VU";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ve"] = "VE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Vn"] = "VN";
    PatientSecondaryInsuranceSubscriberCountryEnum["Vg"] = "VG";
    PatientSecondaryInsuranceSubscriberCountryEnum["Vi"] = "VI";
    PatientSecondaryInsuranceSubscriberCountryEnum["Wf"] = "WF";
    PatientSecondaryInsuranceSubscriberCountryEnum["Eh"] = "EH";
    PatientSecondaryInsuranceSubscriberCountryEnum["Ye"] = "YE";
    PatientSecondaryInsuranceSubscriberCountryEnum["Zm"] = "ZM";
    PatientSecondaryInsuranceSubscriberCountryEnum["Zw"] = "ZW";
})(PatientSecondaryInsuranceSubscriberCountryEnum = exports.PatientSecondaryInsuranceSubscriberCountryEnum || (exports.PatientSecondaryInsuranceSubscriberCountryEnum = {}));
var PatientSecondaryInsuranceSubscriberGenderEnum;
(function (PatientSecondaryInsuranceSubscriberGenderEnum) {
    PatientSecondaryInsuranceSubscriberGenderEnum["Unknown"] = "";
    PatientSecondaryInsuranceSubscriberGenderEnum["Male"] = "Male";
    PatientSecondaryInsuranceSubscriberGenderEnum["Female"] = "Female";
    PatientSecondaryInsuranceSubscriberGenderEnum["Other"] = "Other";
    PatientSecondaryInsuranceSubscriberGenderEnum["Unk"] = "UNK";
    PatientSecondaryInsuranceSubscriberGenderEnum["Asku"] = "ASKU";
})(PatientSecondaryInsuranceSubscriberGenderEnum = exports.PatientSecondaryInsuranceSubscriberGenderEnum || (exports.PatientSecondaryInsuranceSubscriberGenderEnum = {}));
var PatientSecondaryInsuranceSubscriberStateEnum;
(function (PatientSecondaryInsuranceSubscriberStateEnum) {
    PatientSecondaryInsuranceSubscriberStateEnum["Al"] = "AL";
    PatientSecondaryInsuranceSubscriberStateEnum["Ak"] = "AK";
    PatientSecondaryInsuranceSubscriberStateEnum["As"] = "AS";
    PatientSecondaryInsuranceSubscriberStateEnum["Az"] = "AZ";
    PatientSecondaryInsuranceSubscriberStateEnum["Ar"] = "AR";
    PatientSecondaryInsuranceSubscriberStateEnum["Aa"] = "AA";
    PatientSecondaryInsuranceSubscriberStateEnum["Ae"] = "AE";
    PatientSecondaryInsuranceSubscriberStateEnum["Ap"] = "AP";
    PatientSecondaryInsuranceSubscriberStateEnum["Ca"] = "CA";
    PatientSecondaryInsuranceSubscriberStateEnum["Co"] = "CO";
    PatientSecondaryInsuranceSubscriberStateEnum["Ct"] = "CT";
    PatientSecondaryInsuranceSubscriberStateEnum["De"] = "DE";
    PatientSecondaryInsuranceSubscriberStateEnum["Dc"] = "DC";
    PatientSecondaryInsuranceSubscriberStateEnum["Fl"] = "FL";
    PatientSecondaryInsuranceSubscriberStateEnum["Ga"] = "GA";
    PatientSecondaryInsuranceSubscriberStateEnum["Gu"] = "GU";
    PatientSecondaryInsuranceSubscriberStateEnum["Hi"] = "HI";
    PatientSecondaryInsuranceSubscriberStateEnum["Id"] = "ID";
    PatientSecondaryInsuranceSubscriberStateEnum["Il"] = "IL";
    PatientSecondaryInsuranceSubscriberStateEnum["In"] = "IN";
    PatientSecondaryInsuranceSubscriberStateEnum["Ia"] = "IA";
    PatientSecondaryInsuranceSubscriberStateEnum["Ks"] = "KS";
    PatientSecondaryInsuranceSubscriberStateEnum["Ky"] = "KY";
    PatientSecondaryInsuranceSubscriberStateEnum["La"] = "LA";
    PatientSecondaryInsuranceSubscriberStateEnum["Me"] = "ME";
    PatientSecondaryInsuranceSubscriberStateEnum["Md"] = "MD";
    PatientSecondaryInsuranceSubscriberStateEnum["Ma"] = "MA";
    PatientSecondaryInsuranceSubscriberStateEnum["Mi"] = "MI";
    PatientSecondaryInsuranceSubscriberStateEnum["Mn"] = "MN";
    PatientSecondaryInsuranceSubscriberStateEnum["Ms"] = "MS";
    PatientSecondaryInsuranceSubscriberStateEnum["Mo"] = "MO";
    PatientSecondaryInsuranceSubscriberStateEnum["Mt"] = "MT";
    PatientSecondaryInsuranceSubscriberStateEnum["Ne"] = "NE";
    PatientSecondaryInsuranceSubscriberStateEnum["Nv"] = "NV";
    PatientSecondaryInsuranceSubscriberStateEnum["Nh"] = "NH";
    PatientSecondaryInsuranceSubscriberStateEnum["Nj"] = "NJ";
    PatientSecondaryInsuranceSubscriberStateEnum["Nm"] = "NM";
    PatientSecondaryInsuranceSubscriberStateEnum["Ny"] = "NY";
    PatientSecondaryInsuranceSubscriberStateEnum["Nc"] = "NC";
    PatientSecondaryInsuranceSubscriberStateEnum["Nd"] = "ND";
    PatientSecondaryInsuranceSubscriberStateEnum["Mp"] = "MP";
    PatientSecondaryInsuranceSubscriberStateEnum["Oh"] = "OH";
    PatientSecondaryInsuranceSubscriberStateEnum["Ok"] = "OK";
    PatientSecondaryInsuranceSubscriberStateEnum["Or"] = "OR";
    PatientSecondaryInsuranceSubscriberStateEnum["Pa"] = "PA";
    PatientSecondaryInsuranceSubscriberStateEnum["Pr"] = "PR";
    PatientSecondaryInsuranceSubscriberStateEnum["Ri"] = "RI";
    PatientSecondaryInsuranceSubscriberStateEnum["Sc"] = "SC";
    PatientSecondaryInsuranceSubscriberStateEnum["Sd"] = "SD";
    PatientSecondaryInsuranceSubscriberStateEnum["Tn"] = "TN";
    PatientSecondaryInsuranceSubscriberStateEnum["Tx"] = "TX";
    PatientSecondaryInsuranceSubscriberStateEnum["Ut"] = "UT";
    PatientSecondaryInsuranceSubscriberStateEnum["Vt"] = "VT";
    PatientSecondaryInsuranceSubscriberStateEnum["Vi"] = "VI";
    PatientSecondaryInsuranceSubscriberStateEnum["Va"] = "VA";
    PatientSecondaryInsuranceSubscriberStateEnum["Wa"] = "WA";
    PatientSecondaryInsuranceSubscriberStateEnum["Wv"] = "WV";
    PatientSecondaryInsuranceSubscriberStateEnum["Wi"] = "WI";
    PatientSecondaryInsuranceSubscriberStateEnum["Wy"] = "WY";
})(PatientSecondaryInsuranceSubscriberStateEnum = exports.PatientSecondaryInsuranceSubscriberStateEnum || (exports.PatientSecondaryInsuranceSubscriberStateEnum = {}));
// PatientSecondaryInsurance
/**
 * **Warning:** Changing insurance information may make past appointments unbillable. Insurance data is also **unvalidated**; you should use the [`/api/insurances`](#apiinsurances) endpoint to find the appropriate insurance payer.
**/
var PatientSecondaryInsurance = /** @class */ (function (_super) {
    __extends(PatientSecondaryInsurance, _super);
    function PatientSecondaryInsurance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_claim_office_number" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "insuranceClaimOfficeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_company" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "insuranceCompany", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_group_name" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "insuranceGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_group_number" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "insuranceGroupNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_id_number" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "insuranceIdNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_payer_id" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "insurancePayerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_plan_name" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "insurancePlanName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_plan_type" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "insurancePlanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_subscriber_the_patient" }),
        __metadata("design:type", Boolean)
    ], PatientSecondaryInsurance.prototype, "isSubscriberThePatient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient_relationship_to_subscriber" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "patientRelationshipToSubscriber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=photo_back" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "photoBack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=photo_front" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "photoFront", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_address" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_city" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_country" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_date_of_birth" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberDateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_first_name" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_gender" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberGender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_last_name" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_middle_name" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberMiddleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_social_security" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberSocialSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_state" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_suffix" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberSuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_zip_code" }),
        __metadata("design:type", String)
    ], PatientSecondaryInsurance.prototype, "subscriberZipCode", void 0);
    return PatientSecondaryInsurance;
}(utils_1.SpeakeasyBase));
exports.PatientSecondaryInsurance = PatientSecondaryInsurance;
var PatientTertiaryInsuranceInsurancePlanTypeEnum;
(function (PatientTertiaryInsuranceInsurancePlanTypeEnum) {
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Unknown"] = "";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Am"] = "AM";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Bl"] = "BL";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Ch"] = "CH";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Ci"] = "CI";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Seventeen"] = "17";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Ds"] = "DS";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Fourteen"] = "14";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Fi"] = "FI";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Hm"] = "HM";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Sixteen"] = "16";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Fifteen"] = "15";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Lm"] = "LM";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Mc"] = "MC";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Ma"] = "MA";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Mb"] = "MB";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Zz"] = "ZZ";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Of"] = "OF";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Eleven"] = "11";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Thirteen"] = "13";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Twelve"] = "12";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Tv"] = "TV";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Va"] = "VA";
    PatientTertiaryInsuranceInsurancePlanTypeEnum["Wc"] = "WC";
})(PatientTertiaryInsuranceInsurancePlanTypeEnum = exports.PatientTertiaryInsuranceInsurancePlanTypeEnum || (exports.PatientTertiaryInsuranceInsurancePlanTypeEnum = {}));
var PatientTertiaryInsurancePatientRelationshipToSubscriberEnum;
(function (PatientTertiaryInsurancePatientRelationshipToSubscriberEnum) {
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Unknown"] = "";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["One"] = "01";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Four"] = "04";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Five"] = "05";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Seven"] = "07";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Ten"] = "10";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Fifteen"] = "15";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Seventeen"] = "17";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Nineteen"] = "19";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Twenty"] = "20";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["TwentyOne"] = "21";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["TwentyTwo"] = "22";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["TwentyThree"] = "23";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["TwentyFour"] = "24";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["TwentyNine"] = "29";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["ThirtyTwo"] = "32";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["ThirtyThree"] = "33";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["ThirtySix"] = "36";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["ThirtyNine"] = "39";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["Forty"] = "40";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["FortyOne"] = "41";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["FortyThree"] = "43";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["FiftyThree"] = "53";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["SeventySix"] = "76";
    PatientTertiaryInsurancePatientRelationshipToSubscriberEnum["G8"] = "G8";
})(PatientTertiaryInsurancePatientRelationshipToSubscriberEnum = exports.PatientTertiaryInsurancePatientRelationshipToSubscriberEnum || (exports.PatientTertiaryInsurancePatientRelationshipToSubscriberEnum = {}));
var PatientTertiaryInsuranceSubscriberCountryEnum;
(function (PatientTertiaryInsuranceSubscriberCountryEnum) {
    PatientTertiaryInsuranceSubscriberCountryEnum["Unknown"] = "";
    PatientTertiaryInsuranceSubscriberCountryEnum["Af"] = "AF";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ax"] = "AX";
    PatientTertiaryInsuranceSubscriberCountryEnum["Al"] = "AL";
    PatientTertiaryInsuranceSubscriberCountryEnum["Dz"] = "DZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["As"] = "AS";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ad"] = "AD";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ao"] = "AO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ai"] = "AI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Aq"] = "AQ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ag"] = "AG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ar"] = "AR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Am"] = "AM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Aw"] = "AW";
    PatientTertiaryInsuranceSubscriberCountryEnum["Au"] = "AU";
    PatientTertiaryInsuranceSubscriberCountryEnum["At"] = "AT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Az"] = "AZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bs"] = "BS";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bh"] = "BH";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bd"] = "BD";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bb"] = "BB";
    PatientTertiaryInsuranceSubscriberCountryEnum["By"] = "BY";
    PatientTertiaryInsuranceSubscriberCountryEnum["Be"] = "BE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bz"] = "BZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bj"] = "BJ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bm"] = "BM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bt"] = "BT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bo"] = "BO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bq"] = "BQ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ba"] = "BA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bw"] = "BW";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bv"] = "BV";
    PatientTertiaryInsuranceSubscriberCountryEnum["Br"] = "BR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Io"] = "IO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bn"] = "BN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bg"] = "BG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bf"] = "BF";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bi"] = "BI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Kh"] = "KH";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cm"] = "CM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ca"] = "CA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cv"] = "CV";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ky"] = "KY";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cf"] = "CF";
    PatientTertiaryInsuranceSubscriberCountryEnum["Td"] = "TD";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cl"] = "CL";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cn"] = "CN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cx"] = "CX";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cc"] = "CC";
    PatientTertiaryInsuranceSubscriberCountryEnum["Co"] = "CO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Km"] = "KM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cg"] = "CG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cd"] = "CD";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ck"] = "CK";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cr"] = "CR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ci"] = "CI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Hr"] = "HR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cu"] = "CU";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cw"] = "CW";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cy"] = "CY";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cz"] = "CZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Cym"] = "CYM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Dk"] = "DK";
    PatientTertiaryInsuranceSubscriberCountryEnum["Dj"] = "DJ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Dm"] = "DM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Do"] = "DO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ec"] = "EC";
    PatientTertiaryInsuranceSubscriberCountryEnum["Eg"] = "EG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sv"] = "SV";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gq"] = "GQ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Er"] = "ER";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ee"] = "EE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Et"] = "ET";
    PatientTertiaryInsuranceSubscriberCountryEnum["Fk"] = "FK";
    PatientTertiaryInsuranceSubscriberCountryEnum["Fo"] = "FO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Fj"] = "FJ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Fi"] = "FI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Fr"] = "FR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gf"] = "GF";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pf"] = "PF";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tf"] = "TF";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ga"] = "GA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gm"] = "GM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ge"] = "GE";
    PatientTertiaryInsuranceSubscriberCountryEnum["De"] = "DE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gh"] = "GH";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gi"] = "GI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gr"] = "GR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gl"] = "GL";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gd"] = "GD";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gp"] = "GP";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gu"] = "GU";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gt"] = "GT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gg"] = "GG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gn"] = "GN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gw"] = "GW";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gy"] = "GY";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ht"] = "HT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Hm"] = "HM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Va"] = "VA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Hn"] = "HN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Hk"] = "HK";
    PatientTertiaryInsuranceSubscriberCountryEnum["Hu"] = "HU";
    PatientTertiaryInsuranceSubscriberCountryEnum["Is"] = "IS";
    PatientTertiaryInsuranceSubscriberCountryEnum["In"] = "IN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Id"] = "ID";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ir"] = "IR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Iq"] = "IQ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ie"] = "IE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Im"] = "IM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Il"] = "IL";
    PatientTertiaryInsuranceSubscriberCountryEnum["It"] = "IT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Jm"] = "JM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Jp"] = "JP";
    PatientTertiaryInsuranceSubscriberCountryEnum["Je"] = "JE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Jo"] = "JO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Kz"] = "KZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ke"] = "KE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ki"] = "KI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Kp"] = "KP";
    PatientTertiaryInsuranceSubscriberCountryEnum["Kr"] = "KR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Xk"] = "XK";
    PatientTertiaryInsuranceSubscriberCountryEnum["Kw"] = "KW";
    PatientTertiaryInsuranceSubscriberCountryEnum["Kg"] = "KG";
    PatientTertiaryInsuranceSubscriberCountryEnum["La"] = "LA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Lv"] = "LV";
    PatientTertiaryInsuranceSubscriberCountryEnum["Lb"] = "LB";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ls"] = "LS";
    PatientTertiaryInsuranceSubscriberCountryEnum["Lr"] = "LR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ly"] = "LY";
    PatientTertiaryInsuranceSubscriberCountryEnum["Li"] = "LI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Lt"] = "LT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Lu"] = "LU";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mo"] = "MO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mk"] = "MK";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mg"] = "MG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mw"] = "MW";
    PatientTertiaryInsuranceSubscriberCountryEnum["My"] = "MY";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mv"] = "MV";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ml"] = "ML";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mt"] = "MT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mh"] = "MH";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mq"] = "MQ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mr"] = "MR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mu"] = "MU";
    PatientTertiaryInsuranceSubscriberCountryEnum["Yt"] = "YT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mx"] = "MX";
    PatientTertiaryInsuranceSubscriberCountryEnum["Fm"] = "FM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Md"] = "MD";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mc"] = "MC";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mn"] = "MN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Me"] = "ME";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ms"] = "MS";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ma"] = "MA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mz"] = "MZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mm"] = "MM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Na"] = "NA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Nr"] = "NR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Np"] = "NP";
    PatientTertiaryInsuranceSubscriberCountryEnum["Nl"] = "NL";
    PatientTertiaryInsuranceSubscriberCountryEnum["Nc"] = "NC";
    PatientTertiaryInsuranceSubscriberCountryEnum["Nz"] = "NZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ni"] = "NI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ne"] = "NE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ng"] = "NG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Nu"] = "NU";
    PatientTertiaryInsuranceSubscriberCountryEnum["Nf"] = "NF";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mp"] = "MP";
    PatientTertiaryInsuranceSubscriberCountryEnum["No"] = "NO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Om"] = "OM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pk"] = "PK";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pw"] = "PW";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ps"] = "PS";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pa"] = "PA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pg"] = "PG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Py"] = "PY";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pe"] = "PE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ph"] = "PH";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pn"] = "PN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pl"] = "PL";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pt"] = "PT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pr"] = "PR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Qa"] = "QA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Re"] = "RE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ro"] = "RO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ru"] = "RU";
    PatientTertiaryInsuranceSubscriberCountryEnum["Rw"] = "RW";
    PatientTertiaryInsuranceSubscriberCountryEnum["Bl"] = "BL";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sh"] = "SH";
    PatientTertiaryInsuranceSubscriberCountryEnum["Kn"] = "KN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Lc"] = "LC";
    PatientTertiaryInsuranceSubscriberCountryEnum["Mf"] = "MF";
    PatientTertiaryInsuranceSubscriberCountryEnum["Pm"] = "PM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Vc"] = "VC";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ws"] = "WS";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sm"] = "SM";
    PatientTertiaryInsuranceSubscriberCountryEnum["St"] = "ST";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sa"] = "SA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sn"] = "SN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Rs"] = "RS";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sc"] = "SC";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sl"] = "SL";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sg"] = "SG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sx"] = "SX";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sk"] = "SK";
    PatientTertiaryInsuranceSubscriberCountryEnum["Si"] = "SI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sb"] = "SB";
    PatientTertiaryInsuranceSubscriberCountryEnum["So"] = "SO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Za"] = "ZA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gs"] = "GS";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ss"] = "SS";
    PatientTertiaryInsuranceSubscriberCountryEnum["Es"] = "ES";
    PatientTertiaryInsuranceSubscriberCountryEnum["Lk"] = "LK";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sd"] = "SD";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sr"] = "SR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sj"] = "SJ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sz"] = "SZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Se"] = "SE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ch"] = "CH";
    PatientTertiaryInsuranceSubscriberCountryEnum["Sy"] = "SY";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tw"] = "TW";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tj"] = "TJ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tz"] = "TZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Th"] = "TH";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tl"] = "TL";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tg"] = "TG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tk"] = "TK";
    PatientTertiaryInsuranceSubscriberCountryEnum["To"] = "TO";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tt"] = "TT";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tn"] = "TN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tr"] = "TR";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tm"] = "TM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tc"] = "TC";
    PatientTertiaryInsuranceSubscriberCountryEnum["Tv"] = "TV";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ug"] = "UG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ua"] = "UA";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ae"] = "AE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Gb"] = "GB";
    PatientTertiaryInsuranceSubscriberCountryEnum["Us"] = "US";
    PatientTertiaryInsuranceSubscriberCountryEnum["Um"] = "UM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Uy"] = "UY";
    PatientTertiaryInsuranceSubscriberCountryEnum["Uz"] = "UZ";
    PatientTertiaryInsuranceSubscriberCountryEnum["Vu"] = "VU";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ve"] = "VE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Vn"] = "VN";
    PatientTertiaryInsuranceSubscriberCountryEnum["Vg"] = "VG";
    PatientTertiaryInsuranceSubscriberCountryEnum["Vi"] = "VI";
    PatientTertiaryInsuranceSubscriberCountryEnum["Wf"] = "WF";
    PatientTertiaryInsuranceSubscriberCountryEnum["Eh"] = "EH";
    PatientTertiaryInsuranceSubscriberCountryEnum["Ye"] = "YE";
    PatientTertiaryInsuranceSubscriberCountryEnum["Zm"] = "ZM";
    PatientTertiaryInsuranceSubscriberCountryEnum["Zw"] = "ZW";
})(PatientTertiaryInsuranceSubscriberCountryEnum = exports.PatientTertiaryInsuranceSubscriberCountryEnum || (exports.PatientTertiaryInsuranceSubscriberCountryEnum = {}));
var PatientTertiaryInsuranceSubscriberGenderEnum;
(function (PatientTertiaryInsuranceSubscriberGenderEnum) {
    PatientTertiaryInsuranceSubscriberGenderEnum["Unknown"] = "";
    PatientTertiaryInsuranceSubscriberGenderEnum["Male"] = "Male";
    PatientTertiaryInsuranceSubscriberGenderEnum["Female"] = "Female";
    PatientTertiaryInsuranceSubscriberGenderEnum["Other"] = "Other";
    PatientTertiaryInsuranceSubscriberGenderEnum["Unk"] = "UNK";
    PatientTertiaryInsuranceSubscriberGenderEnum["Asku"] = "ASKU";
})(PatientTertiaryInsuranceSubscriberGenderEnum = exports.PatientTertiaryInsuranceSubscriberGenderEnum || (exports.PatientTertiaryInsuranceSubscriberGenderEnum = {}));
var PatientTertiaryInsuranceSubscriberStateEnum;
(function (PatientTertiaryInsuranceSubscriberStateEnum) {
    PatientTertiaryInsuranceSubscriberStateEnum["Al"] = "AL";
    PatientTertiaryInsuranceSubscriberStateEnum["Ak"] = "AK";
    PatientTertiaryInsuranceSubscriberStateEnum["As"] = "AS";
    PatientTertiaryInsuranceSubscriberStateEnum["Az"] = "AZ";
    PatientTertiaryInsuranceSubscriberStateEnum["Ar"] = "AR";
    PatientTertiaryInsuranceSubscriberStateEnum["Aa"] = "AA";
    PatientTertiaryInsuranceSubscriberStateEnum["Ae"] = "AE";
    PatientTertiaryInsuranceSubscriberStateEnum["Ap"] = "AP";
    PatientTertiaryInsuranceSubscriberStateEnum["Ca"] = "CA";
    PatientTertiaryInsuranceSubscriberStateEnum["Co"] = "CO";
    PatientTertiaryInsuranceSubscriberStateEnum["Ct"] = "CT";
    PatientTertiaryInsuranceSubscriberStateEnum["De"] = "DE";
    PatientTertiaryInsuranceSubscriberStateEnum["Dc"] = "DC";
    PatientTertiaryInsuranceSubscriberStateEnum["Fl"] = "FL";
    PatientTertiaryInsuranceSubscriberStateEnum["Ga"] = "GA";
    PatientTertiaryInsuranceSubscriberStateEnum["Gu"] = "GU";
    PatientTertiaryInsuranceSubscriberStateEnum["Hi"] = "HI";
    PatientTertiaryInsuranceSubscriberStateEnum["Id"] = "ID";
    PatientTertiaryInsuranceSubscriberStateEnum["Il"] = "IL";
    PatientTertiaryInsuranceSubscriberStateEnum["In"] = "IN";
    PatientTertiaryInsuranceSubscriberStateEnum["Ia"] = "IA";
    PatientTertiaryInsuranceSubscriberStateEnum["Ks"] = "KS";
    PatientTertiaryInsuranceSubscriberStateEnum["Ky"] = "KY";
    PatientTertiaryInsuranceSubscriberStateEnum["La"] = "LA";
    PatientTertiaryInsuranceSubscriberStateEnum["Me"] = "ME";
    PatientTertiaryInsuranceSubscriberStateEnum["Md"] = "MD";
    PatientTertiaryInsuranceSubscriberStateEnum["Ma"] = "MA";
    PatientTertiaryInsuranceSubscriberStateEnum["Mi"] = "MI";
    PatientTertiaryInsuranceSubscriberStateEnum["Mn"] = "MN";
    PatientTertiaryInsuranceSubscriberStateEnum["Ms"] = "MS";
    PatientTertiaryInsuranceSubscriberStateEnum["Mo"] = "MO";
    PatientTertiaryInsuranceSubscriberStateEnum["Mt"] = "MT";
    PatientTertiaryInsuranceSubscriberStateEnum["Ne"] = "NE";
    PatientTertiaryInsuranceSubscriberStateEnum["Nv"] = "NV";
    PatientTertiaryInsuranceSubscriberStateEnum["Nh"] = "NH";
    PatientTertiaryInsuranceSubscriberStateEnum["Nj"] = "NJ";
    PatientTertiaryInsuranceSubscriberStateEnum["Nm"] = "NM";
    PatientTertiaryInsuranceSubscriberStateEnum["Ny"] = "NY";
    PatientTertiaryInsuranceSubscriberStateEnum["Nc"] = "NC";
    PatientTertiaryInsuranceSubscriberStateEnum["Nd"] = "ND";
    PatientTertiaryInsuranceSubscriberStateEnum["Mp"] = "MP";
    PatientTertiaryInsuranceSubscriberStateEnum["Oh"] = "OH";
    PatientTertiaryInsuranceSubscriberStateEnum["Ok"] = "OK";
    PatientTertiaryInsuranceSubscriberStateEnum["Or"] = "OR";
    PatientTertiaryInsuranceSubscriberStateEnum["Pa"] = "PA";
    PatientTertiaryInsuranceSubscriberStateEnum["Pr"] = "PR";
    PatientTertiaryInsuranceSubscriberStateEnum["Ri"] = "RI";
    PatientTertiaryInsuranceSubscriberStateEnum["Sc"] = "SC";
    PatientTertiaryInsuranceSubscriberStateEnum["Sd"] = "SD";
    PatientTertiaryInsuranceSubscriberStateEnum["Tn"] = "TN";
    PatientTertiaryInsuranceSubscriberStateEnum["Tx"] = "TX";
    PatientTertiaryInsuranceSubscriberStateEnum["Ut"] = "UT";
    PatientTertiaryInsuranceSubscriberStateEnum["Vt"] = "VT";
    PatientTertiaryInsuranceSubscriberStateEnum["Vi"] = "VI";
    PatientTertiaryInsuranceSubscriberStateEnum["Va"] = "VA";
    PatientTertiaryInsuranceSubscriberStateEnum["Wa"] = "WA";
    PatientTertiaryInsuranceSubscriberStateEnum["Wv"] = "WV";
    PatientTertiaryInsuranceSubscriberStateEnum["Wi"] = "WI";
    PatientTertiaryInsuranceSubscriberStateEnum["Wy"] = "WY";
})(PatientTertiaryInsuranceSubscriberStateEnum = exports.PatientTertiaryInsuranceSubscriberStateEnum || (exports.PatientTertiaryInsuranceSubscriberStateEnum = {}));
// PatientTertiaryInsurance
/**
 * **Warning:** Changing insurance information may make past appointments unbillable. Insurance data is also **unvalidated**; you should use the [`/api/insurances`](#apiinsurances) endpoint to find the appropriate insurance payer.
**/
var PatientTertiaryInsurance = /** @class */ (function (_super) {
    __extends(PatientTertiaryInsurance, _super);
    function PatientTertiaryInsurance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_claim_office_number" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "insuranceClaimOfficeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_company" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "insuranceCompany", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_group_name" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "insuranceGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_group_number" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "insuranceGroupNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_id_number" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "insuranceIdNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_payer_id" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "insurancePayerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_plan_name" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "insurancePlanName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_plan_type" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "insurancePlanType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_subscriber_the_patient" }),
        __metadata("design:type", Boolean)
    ], PatientTertiaryInsurance.prototype, "isSubscriberThePatient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient_relationship_to_subscriber" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "patientRelationshipToSubscriber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=photo_back" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "photoBack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=photo_front" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "photoFront", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_address" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_city" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_country" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_date_of_birth" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberDateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_first_name" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_gender" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberGender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_last_name" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_middle_name" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberMiddleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_social_security" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberSocialSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_state" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_suffix" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberSuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriber_zip_code" }),
        __metadata("design:type", String)
    ], PatientTertiaryInsurance.prototype, "subscriberZipCode", void 0);
    return PatientTertiaryInsurance;
}(utils_1.SpeakeasyBase));
exports.PatientTertiaryInsurance = PatientTertiaryInsurance;
var PatientWorkerCompInsuranceWorkersCompPayerStateEnum;
(function (PatientWorkerCompInsuranceWorkersCompPayerStateEnum) {
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Al"] = "AL";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ak"] = "AK";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["As"] = "AS";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Az"] = "AZ";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ar"] = "AR";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Aa"] = "AA";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ae"] = "AE";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ap"] = "AP";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ca"] = "CA";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Co"] = "CO";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ct"] = "CT";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["De"] = "DE";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Dc"] = "DC";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Fl"] = "FL";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ga"] = "GA";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Gu"] = "GU";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Hi"] = "HI";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Id"] = "ID";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Il"] = "IL";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["In"] = "IN";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ia"] = "IA";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ks"] = "KS";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ky"] = "KY";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["La"] = "LA";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Me"] = "ME";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Md"] = "MD";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ma"] = "MA";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Mi"] = "MI";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Mn"] = "MN";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ms"] = "MS";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Mo"] = "MO";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Mt"] = "MT";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ne"] = "NE";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Nv"] = "NV";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Nh"] = "NH";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Nj"] = "NJ";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Nm"] = "NM";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ny"] = "NY";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Nc"] = "NC";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Nd"] = "ND";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Mp"] = "MP";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Oh"] = "OH";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ok"] = "OK";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Or"] = "OR";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Pa"] = "PA";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Pr"] = "PR";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ri"] = "RI";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Sc"] = "SC";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Sd"] = "SD";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Tn"] = "TN";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Tx"] = "TX";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Ut"] = "UT";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Vt"] = "VT";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Vi"] = "VI";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Va"] = "VA";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Wa"] = "WA";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Wv"] = "WV";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Wi"] = "WI";
    PatientWorkerCompInsuranceWorkersCompPayerStateEnum["Wy"] = "WY";
})(PatientWorkerCompInsuranceWorkersCompPayerStateEnum = exports.PatientWorkerCompInsuranceWorkersCompPayerStateEnum || (exports.PatientWorkerCompInsuranceWorkersCompPayerStateEnum = {}));
var PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum;
(function (PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum) {
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Al"] = "AL";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ak"] = "AK";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["As"] = "AS";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Az"] = "AZ";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ar"] = "AR";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Aa"] = "AA";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ae"] = "AE";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ap"] = "AP";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ca"] = "CA";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Co"] = "CO";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ct"] = "CT";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["De"] = "DE";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Dc"] = "DC";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Fl"] = "FL";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ga"] = "GA";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Gu"] = "GU";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Hi"] = "HI";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Id"] = "ID";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Il"] = "IL";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["In"] = "IN";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ia"] = "IA";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ks"] = "KS";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ky"] = "KY";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["La"] = "LA";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Me"] = "ME";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Md"] = "MD";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ma"] = "MA";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Mi"] = "MI";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Mn"] = "MN";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ms"] = "MS";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Mo"] = "MO";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Mt"] = "MT";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ne"] = "NE";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Nv"] = "NV";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Nh"] = "NH";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Nj"] = "NJ";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Nm"] = "NM";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ny"] = "NY";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Nc"] = "NC";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Nd"] = "ND";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Mp"] = "MP";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Oh"] = "OH";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ok"] = "OK";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Or"] = "OR";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Pa"] = "PA";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Pr"] = "PR";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ri"] = "RI";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Sc"] = "SC";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Sd"] = "SD";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Tn"] = "TN";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Tx"] = "TX";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Ut"] = "UT";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Vt"] = "VT";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Vi"] = "VI";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Va"] = "VA";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Wa"] = "WA";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Wv"] = "WV";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Wi"] = "WI";
    PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum["Wy"] = "WY";
})(PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum = exports.PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum || (exports.PatientWorkerCompInsuranceWorkersCompStateOfOccurrenceEnum = {}));
var PatientWorkerCompInsurance = /** @class */ (function (_super) {
    __extends(PatientWorkerCompInsurance, _super);
    function PatientWorkerCompInsurance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=property_and_casualty_agency_claim_number" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "propertyAndCasualtyAgencyClaimNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_carrier_code" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompCarrierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_case_number" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompCaseNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_company" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompCompany", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_date_of_accident" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompDateOfAccident", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_group_name" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_group_number" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompGroupNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_notes" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_payer_address" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompPayerAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_payer_city" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompPayerCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_payer_id" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompPayerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_payer_state" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompPayerState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_payer_zip" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompPayerZip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_state_of_occurrence" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompStateOfOccurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_wcb" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompWcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_wcb_rating_code" }),
        __metadata("design:type", String)
    ], PatientWorkerCompInsurance.prototype, "workersCompWcbRatingCode", void 0);
    return PatientWorkerCompInsurance;
}(utils_1.SpeakeasyBase));
exports.PatientWorkerCompInsurance = PatientWorkerCompInsurance;
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], Patient.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_accident_insurance" }),
        __metadata("design:type", PatientAutoAccidentInsurance)
    ], Patient.prototype, "autoAccidentInsurance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cell_phone" }),
        __metadata("design:type", String)
    ], Patient.prototype, "cellPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chart_id" }),
        __metadata("design:type", String)
    ], Patient.prototype, "chartId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Patient.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copay" }),
        __metadata("design:type", String)
    ], Patient.prototype, "copay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_demographics", elemType: PatientCustomPatientFieldValue }),
        __metadata("design:type", Array)
    ], Patient.prototype, "customDemographics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_of_birth" }),
        __metadata("design:type", String)
    ], Patient.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_of_first_appointment" }),
        __metadata("design:type", String)
    ], Patient.prototype, "dateOfFirstAppointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_of_last_appointment" }),
        __metadata("design:type", String)
    ], Patient.prototype, "dateOfLastAppointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_pharmacy" }),
        __metadata("design:type", String)
    ], Patient.prototype, "defaultPharmacy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disable_sms_messages" }),
        __metadata("design:type", Boolean)
    ], Patient.prototype, "disableSmsMessages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", Number)
    ], Patient.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Patient.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emergency_contact_name" }),
        __metadata("design:type", String)
    ], Patient.prototype, "emergencyContactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emergency_contact_phone" }),
        __metadata("design:type", String)
    ], Patient.prototype, "emergencyContactPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emergency_contact_relation" }),
        __metadata("design:type", String)
    ], Patient.prototype, "emergencyContactRelation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employer" }),
        __metadata("design:type", String)
    ], Patient.prototype, "employer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employer_address" }),
        __metadata("design:type", String)
    ], Patient.prototype, "employerAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employer_city" }),
        __metadata("design:type", String)
    ], Patient.prototype, "employerCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employer_state" }),
        __metadata("design:type", String)
    ], Patient.prototype, "employerState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employer_zip_code" }),
        __metadata("design:type", String)
    ], Patient.prototype, "employerZipCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ethnicity" }),
        __metadata("design:type", String)
    ], Patient.prototype, "ethnicity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Patient.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Patient.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_phone" }),
        __metadata("design:type", String)
    ], Patient.prototype, "homePhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Patient.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Patient.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], Patient.prototype, "middleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nick_name" }),
        __metadata("design:type", String)
    ], Patient.prototype, "nickName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=office_phone" }),
        __metadata("design:type", String)
    ], Patient.prototype, "officePhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offices" }),
        __metadata("design:type", Array)
    ], Patient.prototype, "offices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient_flags", elemType: PatientPatientFlagType }),
        __metadata("design:type", Array)
    ], Patient.prototype, "patientFlags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient_flags_attached", elemType: PatientPatientFlag }),
        __metadata("design:type", Array)
    ], Patient.prototype, "patientFlagsAttached", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient_payment_profile" }),
        __metadata("design:type", String)
    ], Patient.prototype, "patientPaymentProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient_photo" }),
        __metadata("design:type", String)
    ], Patient.prototype, "patientPhoto", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient_photo_date" }),
        __metadata("design:type", String)
    ], Patient.prototype, "patientPhotoDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient_status" }),
        __metadata("design:type", String)
    ], Patient.prototype, "patientStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_language" }),
        __metadata("design:type", String)
    ], Patient.prototype, "preferredLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_care_physician" }),
        __metadata("design:type", String)
    ], Patient.prototype, "primaryCarePhysician", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_insurance" }),
        __metadata("design:type", PatientPrimaryInsurance)
    ], Patient.prototype, "primaryInsurance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=race" }),
        __metadata("design:type", String)
    ], Patient.prototype, "race", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=referring_doctor" }),
        __metadata("design:type", PatientPatient)
    ], Patient.prototype, "referringDoctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=referring_source" }),
        __metadata("design:type", String)
    ], Patient.prototype, "referringSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=responsible_party_email" }),
        __metadata("design:type", String)
    ], Patient.prototype, "responsiblePartyEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=responsible_party_name" }),
        __metadata("design:type", String)
    ], Patient.prototype, "responsiblePartyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=responsible_party_phone" }),
        __metadata("design:type", String)
    ], Patient.prototype, "responsiblePartyPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=responsible_party_relation" }),
        __metadata("design:type", String)
    ], Patient.prototype, "responsiblePartyRelation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondary_insurance" }),
        __metadata("design:type", PatientSecondaryInsurance)
    ], Patient.prototype, "secondaryInsurance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=social_security_number" }),
        __metadata("design:type", String)
    ], Patient.prototype, "socialSecurityNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Patient.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tertiary_insurance" }),
        __metadata("design:type", PatientTertiaryInsurance)
    ], Patient.prototype, "tertiaryInsurance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], Patient.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers_comp_insurance" }),
        __metadata("design:type", PatientWorkerCompInsurance)
    ], Patient.prototype, "workersCompInsurance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], Patient.prototype, "zipCode", void 0);
    return Patient;
}(utils_1.SpeakeasyBase));
exports.Patient = Patient;
