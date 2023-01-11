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
exports.VlcerResponse = exports.VlcerRequest = exports.Vlcer504ApplicationJson = exports.Vlcer504ApplicationJsonErrorDescriptionEnum = exports.Vlcer504ApplicationJsonErrorEnum = exports.Vlcer503ApplicationJson = exports.Vlcer503ApplicationJsonErrorDescriptionEnum = exports.Vlcer503ApplicationJsonErrorEnum = exports.Vlcer502ApplicationJson = exports.Vlcer502ApplicationJsonErrorDescriptionEnum = exports.Vlcer502ApplicationJsonErrorEnum = exports.Vlcer500ApplicationJson = exports.Vlcer500ApplicationJsonErrorDescriptionEnum = exports.Vlcer500ApplicationJsonErrorEnum = exports.Vlcer404ApplicationJson = exports.Vlcer404ApplicationJsonErrorDescriptionEnum = exports.Vlcer404ApplicationJsonErrorEnum = exports.Vlcer401ApplicationJson = exports.Vlcer401ApplicationJsonErrorDescriptionEnum = exports.Vlcer401ApplicationJsonErrorEnum = exports.Vlcer400ApplicationJson = exports.Vlcer400ApplicationJsonErrorDescriptionEnum = exports.Vlcer400ApplicationJsonErrorEnum = exports.VlcerSecurity = exports.VlcerRequestBody = exports.VlcerRequestBodyFormatEnum = exports.VlcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var VlcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(VlcerRequestBodyCertificateParameters, _super);
    function VlcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], VlcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], VlcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], VlcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return VlcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.VlcerRequestBodyCertificateParameters = VlcerRequestBodyCertificateParameters;
var VlcerRequestBodyFormatEnum;
(function (VlcerRequestBodyFormatEnum) {
    VlcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(VlcerRequestBodyFormatEnum = exports.VlcerRequestBodyFormatEnum || (exports.VlcerRequestBodyFormatEnum = {}));
var VlcerRequestBody = /** @class */ (function (_super) {
    __extends(VlcerRequestBody, _super);
    function VlcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", VlcerRequestBodyCertificateParameters)
    ], VlcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], VlcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VlcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], VlcerRequestBody.prototype, "txnId", void 0);
    return VlcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.VlcerRequestBody = VlcerRequestBody;
var VlcerSecurity = /** @class */ (function (_super) {
    __extends(VlcerSecurity, _super);
    function VlcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], VlcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], VlcerSecurity.prototype, "clientId", void 0);
    return VlcerSecurity;
}(utils_1.SpeakeasyBase));
exports.VlcerSecurity = VlcerSecurity;
var Vlcer400ApplicationJsonErrorEnum;
(function (Vlcer400ApplicationJsonErrorEnum) {
    Vlcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Vlcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Vlcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Vlcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Vlcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Vlcer400ApplicationJsonErrorEnum = exports.Vlcer400ApplicationJsonErrorEnum || (exports.Vlcer400ApplicationJsonErrorEnum = {}));
var Vlcer400ApplicationJsonErrorDescriptionEnum;
(function (Vlcer400ApplicationJsonErrorDescriptionEnum) {
    Vlcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Vlcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Vlcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Vlcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Vlcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Vlcer400ApplicationJsonErrorDescriptionEnum = exports.Vlcer400ApplicationJsonErrorDescriptionEnum || (exports.Vlcer400ApplicationJsonErrorDescriptionEnum = {}));
var Vlcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Vlcer400ApplicationJson, _super);
    function Vlcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vlcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vlcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Vlcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vlcer400ApplicationJson = Vlcer400ApplicationJson;
var Vlcer401ApplicationJsonErrorEnum;
(function (Vlcer401ApplicationJsonErrorEnum) {
    Vlcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Vlcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Vlcer401ApplicationJsonErrorEnum = exports.Vlcer401ApplicationJsonErrorEnum || (exports.Vlcer401ApplicationJsonErrorEnum = {}));
var Vlcer401ApplicationJsonErrorDescriptionEnum;
(function (Vlcer401ApplicationJsonErrorDescriptionEnum) {
    Vlcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Vlcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Vlcer401ApplicationJsonErrorDescriptionEnum = exports.Vlcer401ApplicationJsonErrorDescriptionEnum || (exports.Vlcer401ApplicationJsonErrorDescriptionEnum = {}));
var Vlcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Vlcer401ApplicationJson, _super);
    function Vlcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vlcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vlcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Vlcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vlcer401ApplicationJson = Vlcer401ApplicationJson;
var Vlcer404ApplicationJsonErrorEnum;
(function (Vlcer404ApplicationJsonErrorEnum) {
    Vlcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Vlcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Vlcer404ApplicationJsonErrorEnum = exports.Vlcer404ApplicationJsonErrorEnum || (exports.Vlcer404ApplicationJsonErrorEnum = {}));
var Vlcer404ApplicationJsonErrorDescriptionEnum;
(function (Vlcer404ApplicationJsonErrorDescriptionEnum) {
    Vlcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Vlcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Vlcer404ApplicationJsonErrorDescriptionEnum = exports.Vlcer404ApplicationJsonErrorDescriptionEnum || (exports.Vlcer404ApplicationJsonErrorDescriptionEnum = {}));
var Vlcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Vlcer404ApplicationJson, _super);
    function Vlcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vlcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vlcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Vlcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vlcer404ApplicationJson = Vlcer404ApplicationJson;
var Vlcer500ApplicationJsonErrorEnum;
(function (Vlcer500ApplicationJsonErrorEnum) {
    Vlcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Vlcer500ApplicationJsonErrorEnum = exports.Vlcer500ApplicationJsonErrorEnum || (exports.Vlcer500ApplicationJsonErrorEnum = {}));
var Vlcer500ApplicationJsonErrorDescriptionEnum;
(function (Vlcer500ApplicationJsonErrorDescriptionEnum) {
    Vlcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Vlcer500ApplicationJsonErrorDescriptionEnum = exports.Vlcer500ApplicationJsonErrorDescriptionEnum || (exports.Vlcer500ApplicationJsonErrorDescriptionEnum = {}));
var Vlcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Vlcer500ApplicationJson, _super);
    function Vlcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vlcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vlcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Vlcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vlcer500ApplicationJson = Vlcer500ApplicationJson;
var Vlcer502ApplicationJsonErrorEnum;
(function (Vlcer502ApplicationJsonErrorEnum) {
    Vlcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Vlcer502ApplicationJsonErrorEnum = exports.Vlcer502ApplicationJsonErrorEnum || (exports.Vlcer502ApplicationJsonErrorEnum = {}));
var Vlcer502ApplicationJsonErrorDescriptionEnum;
(function (Vlcer502ApplicationJsonErrorDescriptionEnum) {
    Vlcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Vlcer502ApplicationJsonErrorDescriptionEnum = exports.Vlcer502ApplicationJsonErrorDescriptionEnum || (exports.Vlcer502ApplicationJsonErrorDescriptionEnum = {}));
var Vlcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Vlcer502ApplicationJson, _super);
    function Vlcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vlcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vlcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Vlcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vlcer502ApplicationJson = Vlcer502ApplicationJson;
var Vlcer503ApplicationJsonErrorEnum;
(function (Vlcer503ApplicationJsonErrorEnum) {
    Vlcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Vlcer503ApplicationJsonErrorEnum = exports.Vlcer503ApplicationJsonErrorEnum || (exports.Vlcer503ApplicationJsonErrorEnum = {}));
var Vlcer503ApplicationJsonErrorDescriptionEnum;
(function (Vlcer503ApplicationJsonErrorDescriptionEnum) {
    Vlcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Vlcer503ApplicationJsonErrorDescriptionEnum = exports.Vlcer503ApplicationJsonErrorDescriptionEnum || (exports.Vlcer503ApplicationJsonErrorDescriptionEnum = {}));
var Vlcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Vlcer503ApplicationJson, _super);
    function Vlcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vlcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vlcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Vlcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vlcer503ApplicationJson = Vlcer503ApplicationJson;
var Vlcer504ApplicationJsonErrorEnum;
(function (Vlcer504ApplicationJsonErrorEnum) {
    Vlcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Vlcer504ApplicationJsonErrorEnum = exports.Vlcer504ApplicationJsonErrorEnum || (exports.Vlcer504ApplicationJsonErrorEnum = {}));
var Vlcer504ApplicationJsonErrorDescriptionEnum;
(function (Vlcer504ApplicationJsonErrorDescriptionEnum) {
    Vlcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Vlcer504ApplicationJsonErrorDescriptionEnum = exports.Vlcer504ApplicationJsonErrorDescriptionEnum || (exports.Vlcer504ApplicationJsonErrorDescriptionEnum = {}));
var Vlcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Vlcer504ApplicationJson, _super);
    function Vlcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vlcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vlcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Vlcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vlcer504ApplicationJson = Vlcer504ApplicationJson;
var VlcerRequest = /** @class */ (function (_super) {
    __extends(VlcerRequest, _super);
    function VlcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", VlcerRequestBody)
    ], VlcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VlcerSecurity)
    ], VlcerRequest.prototype, "security", void 0);
    return VlcerRequest;
}(utils_1.SpeakeasyBase));
exports.VlcerRequest = VlcerRequest;
var VlcerResponse = /** @class */ (function (_super) {
    __extends(VlcerResponse, _super);
    function VlcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VlcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VlcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vlcer400ApplicationJson)
    ], VlcerResponse.prototype, "vlcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vlcer401ApplicationJson)
    ], VlcerResponse.prototype, "vlcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vlcer404ApplicationJson)
    ], VlcerResponse.prototype, "vlcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vlcer500ApplicationJson)
    ], VlcerResponse.prototype, "vlcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vlcer502ApplicationJson)
    ], VlcerResponse.prototype, "vlcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vlcer503ApplicationJson)
    ], VlcerResponse.prototype, "vlcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vlcer504ApplicationJson)
    ], VlcerResponse.prototype, "vlcer504ApplicationJSONObject", void 0);
    return VlcerResponse;
}(utils_1.SpeakeasyBase));
exports.VlcerResponse = VlcerResponse;
