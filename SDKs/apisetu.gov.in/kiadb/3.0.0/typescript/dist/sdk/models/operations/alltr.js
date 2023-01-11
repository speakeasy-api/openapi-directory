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
exports.AlltrResponse = exports.AlltrRequest = exports.Alltr504ApplicationJson = exports.Alltr504ApplicationJsonErrorDescriptionEnum = exports.Alltr504ApplicationJsonErrorEnum = exports.Alltr503ApplicationJson = exports.Alltr503ApplicationJsonErrorDescriptionEnum = exports.Alltr503ApplicationJsonErrorEnum = exports.Alltr502ApplicationJson = exports.Alltr502ApplicationJsonErrorDescriptionEnum = exports.Alltr502ApplicationJsonErrorEnum = exports.Alltr500ApplicationJson = exports.Alltr500ApplicationJsonErrorDescriptionEnum = exports.Alltr500ApplicationJsonErrorEnum = exports.Alltr404ApplicationJson = exports.Alltr404ApplicationJsonErrorDescriptionEnum = exports.Alltr404ApplicationJsonErrorEnum = exports.Alltr401ApplicationJson = exports.Alltr401ApplicationJsonErrorDescriptionEnum = exports.Alltr401ApplicationJsonErrorEnum = exports.Alltr400ApplicationJson = exports.Alltr400ApplicationJsonErrorDescriptionEnum = exports.Alltr400ApplicationJsonErrorEnum = exports.AlltrSecurity = exports.AlltrRequestBody = exports.AlltrRequestBodyFormatEnum = exports.AlltrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AlltrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AlltrRequestBodyCertificateParameters, _super);
    function AlltrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], AlltrRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], AlltrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], AlltrRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], AlltrRequestBodyCertificateParameters.prototype, "uid", void 0);
    return AlltrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.AlltrRequestBodyCertificateParameters = AlltrRequestBodyCertificateParameters;
var AlltrRequestBodyFormatEnum;
(function (AlltrRequestBodyFormatEnum) {
    AlltrRequestBodyFormatEnum["Pdf"] = "pdf";
})(AlltrRequestBodyFormatEnum = exports.AlltrRequestBodyFormatEnum || (exports.AlltrRequestBodyFormatEnum = {}));
var AlltrRequestBody = /** @class */ (function (_super) {
    __extends(AlltrRequestBody, _super);
    function AlltrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AlltrRequestBodyCertificateParameters)
    ], AlltrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AlltrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AlltrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AlltrRequestBody.prototype, "txnId", void 0);
    return AlltrRequestBody;
}(utils_1.SpeakeasyBase));
exports.AlltrRequestBody = AlltrRequestBody;
var AlltrSecurity = /** @class */ (function (_super) {
    __extends(AlltrSecurity, _super);
    function AlltrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AlltrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AlltrSecurity.prototype, "clientId", void 0);
    return AlltrSecurity;
}(utils_1.SpeakeasyBase));
exports.AlltrSecurity = AlltrSecurity;
var Alltr400ApplicationJsonErrorEnum;
(function (Alltr400ApplicationJsonErrorEnum) {
    Alltr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Alltr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Alltr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Alltr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Alltr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Alltr400ApplicationJsonErrorEnum = exports.Alltr400ApplicationJsonErrorEnum || (exports.Alltr400ApplicationJsonErrorEnum = {}));
var Alltr400ApplicationJsonErrorDescriptionEnum;
(function (Alltr400ApplicationJsonErrorDescriptionEnum) {
    Alltr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Alltr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Alltr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Alltr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Alltr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Alltr400ApplicationJsonErrorDescriptionEnum = exports.Alltr400ApplicationJsonErrorDescriptionEnum || (exports.Alltr400ApplicationJsonErrorDescriptionEnum = {}));
var Alltr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr400ApplicationJson, _super);
    function Alltr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr400ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alltr400ApplicationJson = Alltr400ApplicationJson;
var Alltr401ApplicationJsonErrorEnum;
(function (Alltr401ApplicationJsonErrorEnum) {
    Alltr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Alltr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Alltr401ApplicationJsonErrorEnum = exports.Alltr401ApplicationJsonErrorEnum || (exports.Alltr401ApplicationJsonErrorEnum = {}));
var Alltr401ApplicationJsonErrorDescriptionEnum;
(function (Alltr401ApplicationJsonErrorDescriptionEnum) {
    Alltr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Alltr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Alltr401ApplicationJsonErrorDescriptionEnum = exports.Alltr401ApplicationJsonErrorDescriptionEnum || (exports.Alltr401ApplicationJsonErrorDescriptionEnum = {}));
var Alltr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr401ApplicationJson, _super);
    function Alltr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr401ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alltr401ApplicationJson = Alltr401ApplicationJson;
var Alltr404ApplicationJsonErrorEnum;
(function (Alltr404ApplicationJsonErrorEnum) {
    Alltr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Alltr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Alltr404ApplicationJsonErrorEnum = exports.Alltr404ApplicationJsonErrorEnum || (exports.Alltr404ApplicationJsonErrorEnum = {}));
var Alltr404ApplicationJsonErrorDescriptionEnum;
(function (Alltr404ApplicationJsonErrorDescriptionEnum) {
    Alltr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Alltr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Alltr404ApplicationJsonErrorDescriptionEnum = exports.Alltr404ApplicationJsonErrorDescriptionEnum || (exports.Alltr404ApplicationJsonErrorDescriptionEnum = {}));
var Alltr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr404ApplicationJson, _super);
    function Alltr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr404ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alltr404ApplicationJson = Alltr404ApplicationJson;
var Alltr500ApplicationJsonErrorEnum;
(function (Alltr500ApplicationJsonErrorEnum) {
    Alltr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Alltr500ApplicationJsonErrorEnum = exports.Alltr500ApplicationJsonErrorEnum || (exports.Alltr500ApplicationJsonErrorEnum = {}));
var Alltr500ApplicationJsonErrorDescriptionEnum;
(function (Alltr500ApplicationJsonErrorDescriptionEnum) {
    Alltr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Alltr500ApplicationJsonErrorDescriptionEnum = exports.Alltr500ApplicationJsonErrorDescriptionEnum || (exports.Alltr500ApplicationJsonErrorDescriptionEnum = {}));
var Alltr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr500ApplicationJson, _super);
    function Alltr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr500ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alltr500ApplicationJson = Alltr500ApplicationJson;
var Alltr502ApplicationJsonErrorEnum;
(function (Alltr502ApplicationJsonErrorEnum) {
    Alltr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Alltr502ApplicationJsonErrorEnum = exports.Alltr502ApplicationJsonErrorEnum || (exports.Alltr502ApplicationJsonErrorEnum = {}));
var Alltr502ApplicationJsonErrorDescriptionEnum;
(function (Alltr502ApplicationJsonErrorDescriptionEnum) {
    Alltr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Alltr502ApplicationJsonErrorDescriptionEnum = exports.Alltr502ApplicationJsonErrorDescriptionEnum || (exports.Alltr502ApplicationJsonErrorDescriptionEnum = {}));
var Alltr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr502ApplicationJson, _super);
    function Alltr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr502ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alltr502ApplicationJson = Alltr502ApplicationJson;
var Alltr503ApplicationJsonErrorEnum;
(function (Alltr503ApplicationJsonErrorEnum) {
    Alltr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Alltr503ApplicationJsonErrorEnum = exports.Alltr503ApplicationJsonErrorEnum || (exports.Alltr503ApplicationJsonErrorEnum = {}));
var Alltr503ApplicationJsonErrorDescriptionEnum;
(function (Alltr503ApplicationJsonErrorDescriptionEnum) {
    Alltr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Alltr503ApplicationJsonErrorDescriptionEnum = exports.Alltr503ApplicationJsonErrorDescriptionEnum || (exports.Alltr503ApplicationJsonErrorDescriptionEnum = {}));
var Alltr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr503ApplicationJson, _super);
    function Alltr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr503ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alltr503ApplicationJson = Alltr503ApplicationJson;
var Alltr504ApplicationJsonErrorEnum;
(function (Alltr504ApplicationJsonErrorEnum) {
    Alltr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Alltr504ApplicationJsonErrorEnum = exports.Alltr504ApplicationJsonErrorEnum || (exports.Alltr504ApplicationJsonErrorEnum = {}));
var Alltr504ApplicationJsonErrorDescriptionEnum;
(function (Alltr504ApplicationJsonErrorDescriptionEnum) {
    Alltr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Alltr504ApplicationJsonErrorDescriptionEnum = exports.Alltr504ApplicationJsonErrorDescriptionEnum || (exports.Alltr504ApplicationJsonErrorDescriptionEnum = {}));
var Alltr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Alltr504ApplicationJson, _super);
    function Alltr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alltr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alltr504ApplicationJson.prototype, "errorDescription", void 0);
    return Alltr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alltr504ApplicationJson = Alltr504ApplicationJson;
var AlltrRequest = /** @class */ (function (_super) {
    __extends(AlltrRequest, _super);
    function AlltrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AlltrRequestBody)
    ], AlltrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AlltrSecurity)
    ], AlltrRequest.prototype, "security", void 0);
    return AlltrRequest;
}(utils_1.SpeakeasyBase));
exports.AlltrRequest = AlltrRequest;
var AlltrResponse = /** @class */ (function (_super) {
    __extends(AlltrResponse, _super);
    function AlltrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AlltrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AlltrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alltr400ApplicationJson)
    ], AlltrResponse.prototype, "alltr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alltr401ApplicationJson)
    ], AlltrResponse.prototype, "alltr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alltr404ApplicationJson)
    ], AlltrResponse.prototype, "alltr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alltr500ApplicationJson)
    ], AlltrResponse.prototype, "alltr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alltr502ApplicationJson)
    ], AlltrResponse.prototype, "alltr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alltr503ApplicationJson)
    ], AlltrResponse.prototype, "alltr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alltr504ApplicationJson)
    ], AlltrResponse.prototype, "alltr504ApplicationJSONObject", void 0);
    return AlltrResponse;
}(utils_1.SpeakeasyBase));
exports.AlltrResponse = AlltrResponse;
