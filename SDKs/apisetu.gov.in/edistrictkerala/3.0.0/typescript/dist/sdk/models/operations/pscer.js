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
exports.PscerResponse = exports.PscerRequest = exports.Pscer504ApplicationJson = exports.Pscer504ApplicationJsonErrorDescriptionEnum = exports.Pscer504ApplicationJsonErrorEnum = exports.Pscer503ApplicationJson = exports.Pscer503ApplicationJsonErrorDescriptionEnum = exports.Pscer503ApplicationJsonErrorEnum = exports.Pscer502ApplicationJson = exports.Pscer502ApplicationJsonErrorDescriptionEnum = exports.Pscer502ApplicationJsonErrorEnum = exports.Pscer500ApplicationJson = exports.Pscer500ApplicationJsonErrorDescriptionEnum = exports.Pscer500ApplicationJsonErrorEnum = exports.Pscer404ApplicationJson = exports.Pscer404ApplicationJsonErrorDescriptionEnum = exports.Pscer404ApplicationJsonErrorEnum = exports.Pscer401ApplicationJson = exports.Pscer401ApplicationJsonErrorDescriptionEnum = exports.Pscer401ApplicationJsonErrorEnum = exports.Pscer400ApplicationJson = exports.Pscer400ApplicationJsonErrorDescriptionEnum = exports.Pscer400ApplicationJsonErrorEnum = exports.PscerSecurity = exports.PscerRequestBody = exports.PscerRequestBodyFormatEnum = exports.PscerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PscerRequestBodyCertificateParameters, _super);
    function PscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], PscerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], PscerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], PscerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return PscerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PscerRequestBodyCertificateParameters = PscerRequestBodyCertificateParameters;
var PscerRequestBodyFormatEnum;
(function (PscerRequestBodyFormatEnum) {
    PscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(PscerRequestBodyFormatEnum = exports.PscerRequestBodyFormatEnum || (exports.PscerRequestBodyFormatEnum = {}));
var PscerRequestBody = /** @class */ (function (_super) {
    __extends(PscerRequestBody, _super);
    function PscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PscerRequestBodyCertificateParameters)
    ], PscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PscerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PscerRequestBody.prototype, "txnId", void 0);
    return PscerRequestBody;
}(utils_1.SpeakeasyBase));
exports.PscerRequestBody = PscerRequestBody;
var PscerSecurity = /** @class */ (function (_super) {
    __extends(PscerSecurity, _super);
    function PscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PscerSecurity.prototype, "clientId", void 0);
    return PscerSecurity;
}(utils_1.SpeakeasyBase));
exports.PscerSecurity = PscerSecurity;
var Pscer400ApplicationJsonErrorEnum;
(function (Pscer400ApplicationJsonErrorEnum) {
    Pscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pscer400ApplicationJsonErrorEnum = exports.Pscer400ApplicationJsonErrorEnum || (exports.Pscer400ApplicationJsonErrorEnum = {}));
var Pscer400ApplicationJsonErrorDescriptionEnum;
(function (Pscer400ApplicationJsonErrorDescriptionEnum) {
    Pscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pscer400ApplicationJsonErrorDescriptionEnum = exports.Pscer400ApplicationJsonErrorDescriptionEnum || (exports.Pscer400ApplicationJsonErrorDescriptionEnum = {}));
var Pscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer400ApplicationJson, _super);
    function Pscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pscer400ApplicationJson = Pscer400ApplicationJson;
var Pscer401ApplicationJsonErrorEnum;
(function (Pscer401ApplicationJsonErrorEnum) {
    Pscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pscer401ApplicationJsonErrorEnum = exports.Pscer401ApplicationJsonErrorEnum || (exports.Pscer401ApplicationJsonErrorEnum = {}));
var Pscer401ApplicationJsonErrorDescriptionEnum;
(function (Pscer401ApplicationJsonErrorDescriptionEnum) {
    Pscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pscer401ApplicationJsonErrorDescriptionEnum = exports.Pscer401ApplicationJsonErrorDescriptionEnum || (exports.Pscer401ApplicationJsonErrorDescriptionEnum = {}));
var Pscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer401ApplicationJson, _super);
    function Pscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pscer401ApplicationJson = Pscer401ApplicationJson;
var Pscer404ApplicationJsonErrorEnum;
(function (Pscer404ApplicationJsonErrorEnum) {
    Pscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pscer404ApplicationJsonErrorEnum = exports.Pscer404ApplicationJsonErrorEnum || (exports.Pscer404ApplicationJsonErrorEnum = {}));
var Pscer404ApplicationJsonErrorDescriptionEnum;
(function (Pscer404ApplicationJsonErrorDescriptionEnum) {
    Pscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pscer404ApplicationJsonErrorDescriptionEnum = exports.Pscer404ApplicationJsonErrorDescriptionEnum || (exports.Pscer404ApplicationJsonErrorDescriptionEnum = {}));
var Pscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer404ApplicationJson, _super);
    function Pscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pscer404ApplicationJson = Pscer404ApplicationJson;
var Pscer500ApplicationJsonErrorEnum;
(function (Pscer500ApplicationJsonErrorEnum) {
    Pscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pscer500ApplicationJsonErrorEnum = exports.Pscer500ApplicationJsonErrorEnum || (exports.Pscer500ApplicationJsonErrorEnum = {}));
var Pscer500ApplicationJsonErrorDescriptionEnum;
(function (Pscer500ApplicationJsonErrorDescriptionEnum) {
    Pscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pscer500ApplicationJsonErrorDescriptionEnum = exports.Pscer500ApplicationJsonErrorDescriptionEnum || (exports.Pscer500ApplicationJsonErrorDescriptionEnum = {}));
var Pscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer500ApplicationJson, _super);
    function Pscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pscer500ApplicationJson = Pscer500ApplicationJson;
var Pscer502ApplicationJsonErrorEnum;
(function (Pscer502ApplicationJsonErrorEnum) {
    Pscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pscer502ApplicationJsonErrorEnum = exports.Pscer502ApplicationJsonErrorEnum || (exports.Pscer502ApplicationJsonErrorEnum = {}));
var Pscer502ApplicationJsonErrorDescriptionEnum;
(function (Pscer502ApplicationJsonErrorDescriptionEnum) {
    Pscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pscer502ApplicationJsonErrorDescriptionEnum = exports.Pscer502ApplicationJsonErrorDescriptionEnum || (exports.Pscer502ApplicationJsonErrorDescriptionEnum = {}));
var Pscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer502ApplicationJson, _super);
    function Pscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pscer502ApplicationJson = Pscer502ApplicationJson;
var Pscer503ApplicationJsonErrorEnum;
(function (Pscer503ApplicationJsonErrorEnum) {
    Pscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pscer503ApplicationJsonErrorEnum = exports.Pscer503ApplicationJsonErrorEnum || (exports.Pscer503ApplicationJsonErrorEnum = {}));
var Pscer503ApplicationJsonErrorDescriptionEnum;
(function (Pscer503ApplicationJsonErrorDescriptionEnum) {
    Pscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pscer503ApplicationJsonErrorDescriptionEnum = exports.Pscer503ApplicationJsonErrorDescriptionEnum || (exports.Pscer503ApplicationJsonErrorDescriptionEnum = {}));
var Pscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer503ApplicationJson, _super);
    function Pscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pscer503ApplicationJson = Pscer503ApplicationJson;
var Pscer504ApplicationJsonErrorEnum;
(function (Pscer504ApplicationJsonErrorEnum) {
    Pscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pscer504ApplicationJsonErrorEnum = exports.Pscer504ApplicationJsonErrorEnum || (exports.Pscer504ApplicationJsonErrorEnum = {}));
var Pscer504ApplicationJsonErrorDescriptionEnum;
(function (Pscer504ApplicationJsonErrorDescriptionEnum) {
    Pscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pscer504ApplicationJsonErrorDescriptionEnum = exports.Pscer504ApplicationJsonErrorDescriptionEnum || (exports.Pscer504ApplicationJsonErrorDescriptionEnum = {}));
var Pscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pscer504ApplicationJson, _super);
    function Pscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Pscer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pscer504ApplicationJson = Pscer504ApplicationJson;
var PscerRequest = /** @class */ (function (_super) {
    __extends(PscerRequest, _super);
    function PscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PscerRequestBody)
    ], PscerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PscerSecurity)
    ], PscerRequest.prototype, "security", void 0);
    return PscerRequest;
}(utils_1.SpeakeasyBase));
exports.PscerRequest = PscerRequest;
var PscerResponse = /** @class */ (function (_super) {
    __extends(PscerResponse, _super);
    function PscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PscerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PscerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pscer400ApplicationJson)
    ], PscerResponse.prototype, "pscer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pscer401ApplicationJson)
    ], PscerResponse.prototype, "pscer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pscer404ApplicationJson)
    ], PscerResponse.prototype, "pscer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pscer500ApplicationJson)
    ], PscerResponse.prototype, "pscer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pscer502ApplicationJson)
    ], PscerResponse.prototype, "pscer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pscer503ApplicationJson)
    ], PscerResponse.prototype, "pscer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pscer504ApplicationJson)
    ], PscerResponse.prototype, "pscer504ApplicationJSONObject", void 0);
    return PscerResponse;
}(utils_1.SpeakeasyBase));
exports.PscerResponse = PscerResponse;
