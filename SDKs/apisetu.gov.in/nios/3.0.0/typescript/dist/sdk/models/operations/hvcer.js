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
exports.HvcerResponse = exports.HvcerRequest = exports.Hvcer504ApplicationJson = exports.Hvcer504ApplicationJsonErrorDescriptionEnum = exports.Hvcer504ApplicationJsonErrorEnum = exports.Hvcer503ApplicationJson = exports.Hvcer503ApplicationJsonErrorDescriptionEnum = exports.Hvcer503ApplicationJsonErrorEnum = exports.Hvcer502ApplicationJson = exports.Hvcer502ApplicationJsonErrorDescriptionEnum = exports.Hvcer502ApplicationJsonErrorEnum = exports.Hvcer500ApplicationJson = exports.Hvcer500ApplicationJsonErrorDescriptionEnum = exports.Hvcer500ApplicationJsonErrorEnum = exports.Hvcer404ApplicationJson = exports.Hvcer404ApplicationJsonErrorDescriptionEnum = exports.Hvcer404ApplicationJsonErrorEnum = exports.Hvcer401ApplicationJson = exports.Hvcer401ApplicationJsonErrorDescriptionEnum = exports.Hvcer401ApplicationJsonErrorEnum = exports.Hvcer400ApplicationJson = exports.Hvcer400ApplicationJsonErrorDescriptionEnum = exports.Hvcer400ApplicationJsonErrorEnum = exports.HvcerSecurity = exports.HvcerRequestBody = exports.HvcerRequestBodyFormatEnum = exports.HvcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var HvcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HvcerRequestBodyCertificateParameters, _super);
    function HvcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], HvcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RROLL" }),
        __metadata("design:type", String)
    ], HvcerRequestBodyCertificateParameters.prototype, "rroll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=YEAR" }),
        __metadata("design:type", String)
    ], HvcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return HvcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.HvcerRequestBodyCertificateParameters = HvcerRequestBodyCertificateParameters;
var HvcerRequestBodyFormatEnum;
(function (HvcerRequestBodyFormatEnum) {
    HvcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(HvcerRequestBodyFormatEnum = exports.HvcerRequestBodyFormatEnum || (exports.HvcerRequestBodyFormatEnum = {}));
var HvcerRequestBody = /** @class */ (function (_super) {
    __extends(HvcerRequestBody, _super);
    function HvcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HvcerRequestBodyCertificateParameters)
    ], HvcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HvcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HvcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HvcerRequestBody.prototype, "txnId", void 0);
    return HvcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.HvcerRequestBody = HvcerRequestBody;
var HvcerSecurity = /** @class */ (function (_super) {
    __extends(HvcerSecurity, _super);
    function HvcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HvcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HvcerSecurity.prototype, "clientId", void 0);
    return HvcerSecurity;
}(utils_1.SpeakeasyBase));
exports.HvcerSecurity = HvcerSecurity;
var Hvcer400ApplicationJsonErrorEnum;
(function (Hvcer400ApplicationJsonErrorEnum) {
    Hvcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hvcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hvcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hvcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hvcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hvcer400ApplicationJsonErrorEnum = exports.Hvcer400ApplicationJsonErrorEnum || (exports.Hvcer400ApplicationJsonErrorEnum = {}));
var Hvcer400ApplicationJsonErrorDescriptionEnum;
(function (Hvcer400ApplicationJsonErrorDescriptionEnum) {
    Hvcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hvcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hvcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hvcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hvcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hvcer400ApplicationJsonErrorDescriptionEnum = exports.Hvcer400ApplicationJsonErrorDescriptionEnum || (exports.Hvcer400ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer400ApplicationJson, _super);
    function Hvcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hvcer400ApplicationJson = Hvcer400ApplicationJson;
var Hvcer401ApplicationJsonErrorEnum;
(function (Hvcer401ApplicationJsonErrorEnum) {
    Hvcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hvcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hvcer401ApplicationJsonErrorEnum = exports.Hvcer401ApplicationJsonErrorEnum || (exports.Hvcer401ApplicationJsonErrorEnum = {}));
var Hvcer401ApplicationJsonErrorDescriptionEnum;
(function (Hvcer401ApplicationJsonErrorDescriptionEnum) {
    Hvcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hvcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hvcer401ApplicationJsonErrorDescriptionEnum = exports.Hvcer401ApplicationJsonErrorDescriptionEnum || (exports.Hvcer401ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer401ApplicationJson, _super);
    function Hvcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hvcer401ApplicationJson = Hvcer401ApplicationJson;
var Hvcer404ApplicationJsonErrorEnum;
(function (Hvcer404ApplicationJsonErrorEnum) {
    Hvcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hvcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hvcer404ApplicationJsonErrorEnum = exports.Hvcer404ApplicationJsonErrorEnum || (exports.Hvcer404ApplicationJsonErrorEnum = {}));
var Hvcer404ApplicationJsonErrorDescriptionEnum;
(function (Hvcer404ApplicationJsonErrorDescriptionEnum) {
    Hvcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hvcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hvcer404ApplicationJsonErrorDescriptionEnum = exports.Hvcer404ApplicationJsonErrorDescriptionEnum || (exports.Hvcer404ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer404ApplicationJson, _super);
    function Hvcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hvcer404ApplicationJson = Hvcer404ApplicationJson;
var Hvcer500ApplicationJsonErrorEnum;
(function (Hvcer500ApplicationJsonErrorEnum) {
    Hvcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hvcer500ApplicationJsonErrorEnum = exports.Hvcer500ApplicationJsonErrorEnum || (exports.Hvcer500ApplicationJsonErrorEnum = {}));
var Hvcer500ApplicationJsonErrorDescriptionEnum;
(function (Hvcer500ApplicationJsonErrorDescriptionEnum) {
    Hvcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hvcer500ApplicationJsonErrorDescriptionEnum = exports.Hvcer500ApplicationJsonErrorDescriptionEnum || (exports.Hvcer500ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer500ApplicationJson, _super);
    function Hvcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hvcer500ApplicationJson = Hvcer500ApplicationJson;
var Hvcer502ApplicationJsonErrorEnum;
(function (Hvcer502ApplicationJsonErrorEnum) {
    Hvcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hvcer502ApplicationJsonErrorEnum = exports.Hvcer502ApplicationJsonErrorEnum || (exports.Hvcer502ApplicationJsonErrorEnum = {}));
var Hvcer502ApplicationJsonErrorDescriptionEnum;
(function (Hvcer502ApplicationJsonErrorDescriptionEnum) {
    Hvcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hvcer502ApplicationJsonErrorDescriptionEnum = exports.Hvcer502ApplicationJsonErrorDescriptionEnum || (exports.Hvcer502ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer502ApplicationJson, _super);
    function Hvcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hvcer502ApplicationJson = Hvcer502ApplicationJson;
var Hvcer503ApplicationJsonErrorEnum;
(function (Hvcer503ApplicationJsonErrorEnum) {
    Hvcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hvcer503ApplicationJsonErrorEnum = exports.Hvcer503ApplicationJsonErrorEnum || (exports.Hvcer503ApplicationJsonErrorEnum = {}));
var Hvcer503ApplicationJsonErrorDescriptionEnum;
(function (Hvcer503ApplicationJsonErrorDescriptionEnum) {
    Hvcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hvcer503ApplicationJsonErrorDescriptionEnum = exports.Hvcer503ApplicationJsonErrorDescriptionEnum || (exports.Hvcer503ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer503ApplicationJson, _super);
    function Hvcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hvcer503ApplicationJson = Hvcer503ApplicationJson;
var Hvcer504ApplicationJsonErrorEnum;
(function (Hvcer504ApplicationJsonErrorEnum) {
    Hvcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hvcer504ApplicationJsonErrorEnum = exports.Hvcer504ApplicationJsonErrorEnum || (exports.Hvcer504ApplicationJsonErrorEnum = {}));
var Hvcer504ApplicationJsonErrorDescriptionEnum;
(function (Hvcer504ApplicationJsonErrorDescriptionEnum) {
    Hvcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hvcer504ApplicationJsonErrorDescriptionEnum = exports.Hvcer504ApplicationJsonErrorDescriptionEnum || (exports.Hvcer504ApplicationJsonErrorDescriptionEnum = {}));
var Hvcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hvcer504ApplicationJson, _super);
    function Hvcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hvcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hvcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Hvcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hvcer504ApplicationJson = Hvcer504ApplicationJson;
var HvcerRequest = /** @class */ (function (_super) {
    __extends(HvcerRequest, _super);
    function HvcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", HvcerRequestBody)
    ], HvcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", HvcerSecurity)
    ], HvcerRequest.prototype, "security", void 0);
    return HvcerRequest;
}(utils_1.SpeakeasyBase));
exports.HvcerRequest = HvcerRequest;
var HvcerResponse = /** @class */ (function (_super) {
    __extends(HvcerResponse, _super);
    function HvcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], HvcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], HvcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hvcer400ApplicationJson)
    ], HvcerResponse.prototype, "hvcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hvcer401ApplicationJson)
    ], HvcerResponse.prototype, "hvcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hvcer404ApplicationJson)
    ], HvcerResponse.prototype, "hvcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hvcer500ApplicationJson)
    ], HvcerResponse.prototype, "hvcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hvcer502ApplicationJson)
    ], HvcerResponse.prototype, "hvcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hvcer503ApplicationJson)
    ], HvcerResponse.prototype, "hvcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hvcer504ApplicationJson)
    ], HvcerResponse.prototype, "hvcer504ApplicationJSONObject", void 0);
    return HvcerResponse;
}(utils_1.SpeakeasyBase));
exports.HvcerResponse = HvcerResponse;
