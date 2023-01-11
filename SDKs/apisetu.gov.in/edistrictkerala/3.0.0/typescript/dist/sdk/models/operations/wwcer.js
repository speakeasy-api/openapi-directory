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
exports.WwcerResponse = exports.WwcerRequest = exports.Wwcer504ApplicationJson = exports.Wwcer504ApplicationJsonErrorDescriptionEnum = exports.Wwcer504ApplicationJsonErrorEnum = exports.Wwcer503ApplicationJson = exports.Wwcer503ApplicationJsonErrorDescriptionEnum = exports.Wwcer503ApplicationJsonErrorEnum = exports.Wwcer502ApplicationJson = exports.Wwcer502ApplicationJsonErrorDescriptionEnum = exports.Wwcer502ApplicationJsonErrorEnum = exports.Wwcer500ApplicationJson = exports.Wwcer500ApplicationJsonErrorDescriptionEnum = exports.Wwcer500ApplicationJsonErrorEnum = exports.Wwcer404ApplicationJson = exports.Wwcer404ApplicationJsonErrorDescriptionEnum = exports.Wwcer404ApplicationJsonErrorEnum = exports.Wwcer401ApplicationJson = exports.Wwcer401ApplicationJsonErrorDescriptionEnum = exports.Wwcer401ApplicationJsonErrorEnum = exports.Wwcer400ApplicationJson = exports.Wwcer400ApplicationJsonErrorDescriptionEnum = exports.Wwcer400ApplicationJsonErrorEnum = exports.WwcerSecurity = exports.WwcerRequestBody = exports.WwcerRequestBodyFormatEnum = exports.WwcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WwcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(WwcerRequestBodyCertificateParameters, _super);
    function WwcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], WwcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], WwcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], WwcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return WwcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.WwcerRequestBodyCertificateParameters = WwcerRequestBodyCertificateParameters;
var WwcerRequestBodyFormatEnum;
(function (WwcerRequestBodyFormatEnum) {
    WwcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(WwcerRequestBodyFormatEnum = exports.WwcerRequestBodyFormatEnum || (exports.WwcerRequestBodyFormatEnum = {}));
var WwcerRequestBody = /** @class */ (function (_super) {
    __extends(WwcerRequestBody, _super);
    function WwcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", WwcerRequestBodyCertificateParameters)
    ], WwcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], WwcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], WwcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], WwcerRequestBody.prototype, "txnId", void 0);
    return WwcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.WwcerRequestBody = WwcerRequestBody;
var WwcerSecurity = /** @class */ (function (_super) {
    __extends(WwcerSecurity, _super);
    function WwcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WwcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], WwcerSecurity.prototype, "clientId", void 0);
    return WwcerSecurity;
}(utils_1.SpeakeasyBase));
exports.WwcerSecurity = WwcerSecurity;
var Wwcer400ApplicationJsonErrorEnum;
(function (Wwcer400ApplicationJsonErrorEnum) {
    Wwcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Wwcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Wwcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Wwcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Wwcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Wwcer400ApplicationJsonErrorEnum = exports.Wwcer400ApplicationJsonErrorEnum || (exports.Wwcer400ApplicationJsonErrorEnum = {}));
var Wwcer400ApplicationJsonErrorDescriptionEnum;
(function (Wwcer400ApplicationJsonErrorDescriptionEnum) {
    Wwcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Wwcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Wwcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Wwcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Wwcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Wwcer400ApplicationJsonErrorDescriptionEnum = exports.Wwcer400ApplicationJsonErrorDescriptionEnum || (exports.Wwcer400ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer400ApplicationJson, _super);
    function Wwcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wwcer400ApplicationJson = Wwcer400ApplicationJson;
var Wwcer401ApplicationJsonErrorEnum;
(function (Wwcer401ApplicationJsonErrorEnum) {
    Wwcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Wwcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Wwcer401ApplicationJsonErrorEnum = exports.Wwcer401ApplicationJsonErrorEnum || (exports.Wwcer401ApplicationJsonErrorEnum = {}));
var Wwcer401ApplicationJsonErrorDescriptionEnum;
(function (Wwcer401ApplicationJsonErrorDescriptionEnum) {
    Wwcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Wwcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Wwcer401ApplicationJsonErrorDescriptionEnum = exports.Wwcer401ApplicationJsonErrorDescriptionEnum || (exports.Wwcer401ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer401ApplicationJson, _super);
    function Wwcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wwcer401ApplicationJson = Wwcer401ApplicationJson;
var Wwcer404ApplicationJsonErrorEnum;
(function (Wwcer404ApplicationJsonErrorEnum) {
    Wwcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Wwcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Wwcer404ApplicationJsonErrorEnum = exports.Wwcer404ApplicationJsonErrorEnum || (exports.Wwcer404ApplicationJsonErrorEnum = {}));
var Wwcer404ApplicationJsonErrorDescriptionEnum;
(function (Wwcer404ApplicationJsonErrorDescriptionEnum) {
    Wwcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Wwcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Wwcer404ApplicationJsonErrorDescriptionEnum = exports.Wwcer404ApplicationJsonErrorDescriptionEnum || (exports.Wwcer404ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer404ApplicationJson, _super);
    function Wwcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wwcer404ApplicationJson = Wwcer404ApplicationJson;
var Wwcer500ApplicationJsonErrorEnum;
(function (Wwcer500ApplicationJsonErrorEnum) {
    Wwcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Wwcer500ApplicationJsonErrorEnum = exports.Wwcer500ApplicationJsonErrorEnum || (exports.Wwcer500ApplicationJsonErrorEnum = {}));
var Wwcer500ApplicationJsonErrorDescriptionEnum;
(function (Wwcer500ApplicationJsonErrorDescriptionEnum) {
    Wwcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Wwcer500ApplicationJsonErrorDescriptionEnum = exports.Wwcer500ApplicationJsonErrorDescriptionEnum || (exports.Wwcer500ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer500ApplicationJson, _super);
    function Wwcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wwcer500ApplicationJson = Wwcer500ApplicationJson;
var Wwcer502ApplicationJsonErrorEnum;
(function (Wwcer502ApplicationJsonErrorEnum) {
    Wwcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Wwcer502ApplicationJsonErrorEnum = exports.Wwcer502ApplicationJsonErrorEnum || (exports.Wwcer502ApplicationJsonErrorEnum = {}));
var Wwcer502ApplicationJsonErrorDescriptionEnum;
(function (Wwcer502ApplicationJsonErrorDescriptionEnum) {
    Wwcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Wwcer502ApplicationJsonErrorDescriptionEnum = exports.Wwcer502ApplicationJsonErrorDescriptionEnum || (exports.Wwcer502ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer502ApplicationJson, _super);
    function Wwcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wwcer502ApplicationJson = Wwcer502ApplicationJson;
var Wwcer503ApplicationJsonErrorEnum;
(function (Wwcer503ApplicationJsonErrorEnum) {
    Wwcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Wwcer503ApplicationJsonErrorEnum = exports.Wwcer503ApplicationJsonErrorEnum || (exports.Wwcer503ApplicationJsonErrorEnum = {}));
var Wwcer503ApplicationJsonErrorDescriptionEnum;
(function (Wwcer503ApplicationJsonErrorDescriptionEnum) {
    Wwcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Wwcer503ApplicationJsonErrorDescriptionEnum = exports.Wwcer503ApplicationJsonErrorDescriptionEnum || (exports.Wwcer503ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer503ApplicationJson, _super);
    function Wwcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wwcer503ApplicationJson = Wwcer503ApplicationJson;
var Wwcer504ApplicationJsonErrorEnum;
(function (Wwcer504ApplicationJsonErrorEnum) {
    Wwcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Wwcer504ApplicationJsonErrorEnum = exports.Wwcer504ApplicationJsonErrorEnum || (exports.Wwcer504ApplicationJsonErrorEnum = {}));
var Wwcer504ApplicationJsonErrorDescriptionEnum;
(function (Wwcer504ApplicationJsonErrorDescriptionEnum) {
    Wwcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Wwcer504ApplicationJsonErrorDescriptionEnum = exports.Wwcer504ApplicationJsonErrorDescriptionEnum || (exports.Wwcer504ApplicationJsonErrorDescriptionEnum = {}));
var Wwcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Wwcer504ApplicationJson, _super);
    function Wwcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wwcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wwcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Wwcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wwcer504ApplicationJson = Wwcer504ApplicationJson;
var WwcerRequest = /** @class */ (function (_super) {
    __extends(WwcerRequest, _super);
    function WwcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WwcerRequestBody)
    ], WwcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WwcerSecurity)
    ], WwcerRequest.prototype, "security", void 0);
    return WwcerRequest;
}(utils_1.SpeakeasyBase));
exports.WwcerRequest = WwcerRequest;
var WwcerResponse = /** @class */ (function (_super) {
    __extends(WwcerResponse, _super);
    function WwcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WwcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WwcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wwcer400ApplicationJson)
    ], WwcerResponse.prototype, "wwcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wwcer401ApplicationJson)
    ], WwcerResponse.prototype, "wwcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wwcer404ApplicationJson)
    ], WwcerResponse.prototype, "wwcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wwcer500ApplicationJson)
    ], WwcerResponse.prototype, "wwcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wwcer502ApplicationJson)
    ], WwcerResponse.prototype, "wwcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wwcer503ApplicationJson)
    ], WwcerResponse.prototype, "wwcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wwcer504ApplicationJson)
    ], WwcerResponse.prototype, "wwcer504ApplicationJSONObject", void 0);
    return WwcerResponse;
}(utils_1.SpeakeasyBase));
exports.WwcerResponse = WwcerResponse;
