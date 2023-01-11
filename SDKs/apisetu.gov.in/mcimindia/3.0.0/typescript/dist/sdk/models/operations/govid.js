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
exports.GovidResponse = exports.GovidRequest = exports.Govid504ApplicationJson = exports.Govid504ApplicationJsonErrorDescriptionEnum = exports.Govid504ApplicationJsonErrorEnum = exports.Govid503ApplicationJson = exports.Govid503ApplicationJsonErrorDescriptionEnum = exports.Govid503ApplicationJsonErrorEnum = exports.Govid502ApplicationJson = exports.Govid502ApplicationJsonErrorDescriptionEnum = exports.Govid502ApplicationJsonErrorEnum = exports.Govid500ApplicationJson = exports.Govid500ApplicationJsonErrorDescriptionEnum = exports.Govid500ApplicationJsonErrorEnum = exports.Govid404ApplicationJson = exports.Govid404ApplicationJsonErrorDescriptionEnum = exports.Govid404ApplicationJsonErrorEnum = exports.Govid401ApplicationJson = exports.Govid401ApplicationJsonErrorDescriptionEnum = exports.Govid401ApplicationJsonErrorEnum = exports.Govid400ApplicationJson = exports.Govid400ApplicationJsonErrorDescriptionEnum = exports.Govid400ApplicationJsonErrorEnum = exports.GovidSecurity = exports.GovidRequestBody = exports.GovidRequestBodyFormatEnum = exports.GovidRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GovidRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(GovidRequestBodyCertificateParameters, _super);
    function GovidRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], GovidRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], GovidRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=REGN_NO" }),
        __metadata("design:type", String)
    ], GovidRequestBodyCertificateParameters.prototype, "regnNO", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], GovidRequestBodyCertificateParameters.prototype, "uid", void 0);
    return GovidRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.GovidRequestBodyCertificateParameters = GovidRequestBodyCertificateParameters;
var GovidRequestBodyFormatEnum;
(function (GovidRequestBodyFormatEnum) {
    GovidRequestBodyFormatEnum["Pdf"] = "pdf";
})(GovidRequestBodyFormatEnum = exports.GovidRequestBodyFormatEnum || (exports.GovidRequestBodyFormatEnum = {}));
var GovidRequestBody = /** @class */ (function (_super) {
    __extends(GovidRequestBody, _super);
    function GovidRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", GovidRequestBodyCertificateParameters)
    ], GovidRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], GovidRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GovidRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], GovidRequestBody.prototype, "txnId", void 0);
    return GovidRequestBody;
}(utils_1.SpeakeasyBase));
exports.GovidRequestBody = GovidRequestBody;
var GovidSecurity = /** @class */ (function (_super) {
    __extends(GovidSecurity, _super);
    function GovidSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GovidSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GovidSecurity.prototype, "clientId", void 0);
    return GovidSecurity;
}(utils_1.SpeakeasyBase));
exports.GovidSecurity = GovidSecurity;
var Govid400ApplicationJsonErrorEnum;
(function (Govid400ApplicationJsonErrorEnum) {
    Govid400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Govid400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Govid400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Govid400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Govid400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Govid400ApplicationJsonErrorEnum = exports.Govid400ApplicationJsonErrorEnum || (exports.Govid400ApplicationJsonErrorEnum = {}));
var Govid400ApplicationJsonErrorDescriptionEnum;
(function (Govid400ApplicationJsonErrorDescriptionEnum) {
    Govid400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Govid400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Govid400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Govid400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Govid400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Govid400ApplicationJsonErrorDescriptionEnum = exports.Govid400ApplicationJsonErrorDescriptionEnum || (exports.Govid400ApplicationJsonErrorDescriptionEnum = {}));
var Govid400ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid400ApplicationJson, _super);
    function Govid400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid400ApplicationJson.prototype, "errorDescription", void 0);
    return Govid400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Govid400ApplicationJson = Govid400ApplicationJson;
var Govid401ApplicationJsonErrorEnum;
(function (Govid401ApplicationJsonErrorEnum) {
    Govid401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Govid401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Govid401ApplicationJsonErrorEnum = exports.Govid401ApplicationJsonErrorEnum || (exports.Govid401ApplicationJsonErrorEnum = {}));
var Govid401ApplicationJsonErrorDescriptionEnum;
(function (Govid401ApplicationJsonErrorDescriptionEnum) {
    Govid401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Govid401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Govid401ApplicationJsonErrorDescriptionEnum = exports.Govid401ApplicationJsonErrorDescriptionEnum || (exports.Govid401ApplicationJsonErrorDescriptionEnum = {}));
var Govid401ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid401ApplicationJson, _super);
    function Govid401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid401ApplicationJson.prototype, "errorDescription", void 0);
    return Govid401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Govid401ApplicationJson = Govid401ApplicationJson;
var Govid404ApplicationJsonErrorEnum;
(function (Govid404ApplicationJsonErrorEnum) {
    Govid404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Govid404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Govid404ApplicationJsonErrorEnum = exports.Govid404ApplicationJsonErrorEnum || (exports.Govid404ApplicationJsonErrorEnum = {}));
var Govid404ApplicationJsonErrorDescriptionEnum;
(function (Govid404ApplicationJsonErrorDescriptionEnum) {
    Govid404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Govid404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Govid404ApplicationJsonErrorDescriptionEnum = exports.Govid404ApplicationJsonErrorDescriptionEnum || (exports.Govid404ApplicationJsonErrorDescriptionEnum = {}));
var Govid404ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid404ApplicationJson, _super);
    function Govid404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid404ApplicationJson.prototype, "errorDescription", void 0);
    return Govid404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Govid404ApplicationJson = Govid404ApplicationJson;
var Govid500ApplicationJsonErrorEnum;
(function (Govid500ApplicationJsonErrorEnum) {
    Govid500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Govid500ApplicationJsonErrorEnum = exports.Govid500ApplicationJsonErrorEnum || (exports.Govid500ApplicationJsonErrorEnum = {}));
var Govid500ApplicationJsonErrorDescriptionEnum;
(function (Govid500ApplicationJsonErrorDescriptionEnum) {
    Govid500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Govid500ApplicationJsonErrorDescriptionEnum = exports.Govid500ApplicationJsonErrorDescriptionEnum || (exports.Govid500ApplicationJsonErrorDescriptionEnum = {}));
var Govid500ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid500ApplicationJson, _super);
    function Govid500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid500ApplicationJson.prototype, "errorDescription", void 0);
    return Govid500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Govid500ApplicationJson = Govid500ApplicationJson;
var Govid502ApplicationJsonErrorEnum;
(function (Govid502ApplicationJsonErrorEnum) {
    Govid502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Govid502ApplicationJsonErrorEnum = exports.Govid502ApplicationJsonErrorEnum || (exports.Govid502ApplicationJsonErrorEnum = {}));
var Govid502ApplicationJsonErrorDescriptionEnum;
(function (Govid502ApplicationJsonErrorDescriptionEnum) {
    Govid502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Govid502ApplicationJsonErrorDescriptionEnum = exports.Govid502ApplicationJsonErrorDescriptionEnum || (exports.Govid502ApplicationJsonErrorDescriptionEnum = {}));
var Govid502ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid502ApplicationJson, _super);
    function Govid502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid502ApplicationJson.prototype, "errorDescription", void 0);
    return Govid502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Govid502ApplicationJson = Govid502ApplicationJson;
var Govid503ApplicationJsonErrorEnum;
(function (Govid503ApplicationJsonErrorEnum) {
    Govid503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Govid503ApplicationJsonErrorEnum = exports.Govid503ApplicationJsonErrorEnum || (exports.Govid503ApplicationJsonErrorEnum = {}));
var Govid503ApplicationJsonErrorDescriptionEnum;
(function (Govid503ApplicationJsonErrorDescriptionEnum) {
    Govid503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Govid503ApplicationJsonErrorDescriptionEnum = exports.Govid503ApplicationJsonErrorDescriptionEnum || (exports.Govid503ApplicationJsonErrorDescriptionEnum = {}));
var Govid503ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid503ApplicationJson, _super);
    function Govid503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid503ApplicationJson.prototype, "errorDescription", void 0);
    return Govid503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Govid503ApplicationJson = Govid503ApplicationJson;
var Govid504ApplicationJsonErrorEnum;
(function (Govid504ApplicationJsonErrorEnum) {
    Govid504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Govid504ApplicationJsonErrorEnum = exports.Govid504ApplicationJsonErrorEnum || (exports.Govid504ApplicationJsonErrorEnum = {}));
var Govid504ApplicationJsonErrorDescriptionEnum;
(function (Govid504ApplicationJsonErrorDescriptionEnum) {
    Govid504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Govid504ApplicationJsonErrorDescriptionEnum = exports.Govid504ApplicationJsonErrorDescriptionEnum || (exports.Govid504ApplicationJsonErrorDescriptionEnum = {}));
var Govid504ApplicationJson = /** @class */ (function (_super) {
    __extends(Govid504ApplicationJson, _super);
    function Govid504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Govid504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Govid504ApplicationJson.prototype, "errorDescription", void 0);
    return Govid504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Govid504ApplicationJson = Govid504ApplicationJson;
var GovidRequest = /** @class */ (function (_super) {
    __extends(GovidRequest, _super);
    function GovidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GovidRequestBody)
    ], GovidRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GovidSecurity)
    ], GovidRequest.prototype, "security", void 0);
    return GovidRequest;
}(utils_1.SpeakeasyBase));
exports.GovidRequest = GovidRequest;
var GovidResponse = /** @class */ (function (_super) {
    __extends(GovidResponse, _super);
    function GovidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GovidResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GovidResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Govid400ApplicationJson)
    ], GovidResponse.prototype, "govid400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Govid401ApplicationJson)
    ], GovidResponse.prototype, "govid401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Govid404ApplicationJson)
    ], GovidResponse.prototype, "govid404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Govid500ApplicationJson)
    ], GovidResponse.prototype, "govid500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Govid502ApplicationJson)
    ], GovidResponse.prototype, "govid502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Govid503ApplicationJson)
    ], GovidResponse.prototype, "govid503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Govid504ApplicationJson)
    ], GovidResponse.prototype, "govid504ApplicationJSONObject", void 0);
    return GovidResponse;
}(utils_1.SpeakeasyBase));
exports.GovidResponse = GovidResponse;
