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
exports.DgcerResponse = exports.DgcerRequest = exports.Dgcer504ApplicationJson = exports.Dgcer504ApplicationJsonErrorDescriptionEnum = exports.Dgcer504ApplicationJsonErrorEnum = exports.Dgcer503ApplicationJson = exports.Dgcer503ApplicationJsonErrorDescriptionEnum = exports.Dgcer503ApplicationJsonErrorEnum = exports.Dgcer502ApplicationJson = exports.Dgcer502ApplicationJsonErrorDescriptionEnum = exports.Dgcer502ApplicationJsonErrorEnum = exports.Dgcer500ApplicationJson = exports.Dgcer500ApplicationJsonErrorDescriptionEnum = exports.Dgcer500ApplicationJsonErrorEnum = exports.Dgcer404ApplicationJson = exports.Dgcer404ApplicationJsonErrorDescriptionEnum = exports.Dgcer404ApplicationJsonErrorEnum = exports.Dgcer401ApplicationJson = exports.Dgcer401ApplicationJsonErrorDescriptionEnum = exports.Dgcer401ApplicationJsonErrorEnum = exports.Dgcer400ApplicationJson = exports.Dgcer400ApplicationJsonErrorDescriptionEnum = exports.Dgcer400ApplicationJsonErrorEnum = exports.DgcerSecurity = exports.DgcerRequestBody = exports.DgcerRequestBodyFormatEnum = exports.DgcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DgcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DgcerRequestBodyCertificateParameters, _super);
    function DgcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CNAME" }),
        __metadata("design:type", String)
    ], DgcerRequestBodyCertificateParameters.prototype, "cname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=REGNO" }),
        __metadata("design:type", String)
    ], DgcerRequestBodyCertificateParameters.prototype, "regno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=YEAR" }),
        __metadata("design:type", String)
    ], DgcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return DgcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.DgcerRequestBodyCertificateParameters = DgcerRequestBodyCertificateParameters;
var DgcerRequestBodyFormatEnum;
(function (DgcerRequestBodyFormatEnum) {
    DgcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DgcerRequestBodyFormatEnum = exports.DgcerRequestBodyFormatEnum || (exports.DgcerRequestBodyFormatEnum = {}));
var DgcerRequestBody = /** @class */ (function (_super) {
    __extends(DgcerRequestBody, _super);
    function DgcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DgcerRequestBodyCertificateParameters)
    ], DgcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DgcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DgcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DgcerRequestBody.prototype, "txnId", void 0);
    return DgcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.DgcerRequestBody = DgcerRequestBody;
var DgcerSecurity = /** @class */ (function (_super) {
    __extends(DgcerSecurity, _super);
    function DgcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DgcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DgcerSecurity.prototype, "clientId", void 0);
    return DgcerSecurity;
}(utils_1.SpeakeasyBase));
exports.DgcerSecurity = DgcerSecurity;
var Dgcer400ApplicationJsonErrorEnum;
(function (Dgcer400ApplicationJsonErrorEnum) {
    Dgcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dgcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dgcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dgcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dgcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dgcer400ApplicationJsonErrorEnum = exports.Dgcer400ApplicationJsonErrorEnum || (exports.Dgcer400ApplicationJsonErrorEnum = {}));
var Dgcer400ApplicationJsonErrorDescriptionEnum;
(function (Dgcer400ApplicationJsonErrorDescriptionEnum) {
    Dgcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dgcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dgcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dgcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dgcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dgcer400ApplicationJsonErrorDescriptionEnum = exports.Dgcer400ApplicationJsonErrorDescriptionEnum || (exports.Dgcer400ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer400ApplicationJson, _super);
    function Dgcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgcer400ApplicationJson = Dgcer400ApplicationJson;
var Dgcer401ApplicationJsonErrorEnum;
(function (Dgcer401ApplicationJsonErrorEnum) {
    Dgcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dgcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dgcer401ApplicationJsonErrorEnum = exports.Dgcer401ApplicationJsonErrorEnum || (exports.Dgcer401ApplicationJsonErrorEnum = {}));
var Dgcer401ApplicationJsonErrorDescriptionEnum;
(function (Dgcer401ApplicationJsonErrorDescriptionEnum) {
    Dgcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dgcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dgcer401ApplicationJsonErrorDescriptionEnum = exports.Dgcer401ApplicationJsonErrorDescriptionEnum || (exports.Dgcer401ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer401ApplicationJson, _super);
    function Dgcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgcer401ApplicationJson = Dgcer401ApplicationJson;
var Dgcer404ApplicationJsonErrorEnum;
(function (Dgcer404ApplicationJsonErrorEnum) {
    Dgcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dgcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dgcer404ApplicationJsonErrorEnum = exports.Dgcer404ApplicationJsonErrorEnum || (exports.Dgcer404ApplicationJsonErrorEnum = {}));
var Dgcer404ApplicationJsonErrorDescriptionEnum;
(function (Dgcer404ApplicationJsonErrorDescriptionEnum) {
    Dgcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dgcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dgcer404ApplicationJsonErrorDescriptionEnum = exports.Dgcer404ApplicationJsonErrorDescriptionEnum || (exports.Dgcer404ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer404ApplicationJson, _super);
    function Dgcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgcer404ApplicationJson = Dgcer404ApplicationJson;
var Dgcer500ApplicationJsonErrorEnum;
(function (Dgcer500ApplicationJsonErrorEnum) {
    Dgcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dgcer500ApplicationJsonErrorEnum = exports.Dgcer500ApplicationJsonErrorEnum || (exports.Dgcer500ApplicationJsonErrorEnum = {}));
var Dgcer500ApplicationJsonErrorDescriptionEnum;
(function (Dgcer500ApplicationJsonErrorDescriptionEnum) {
    Dgcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dgcer500ApplicationJsonErrorDescriptionEnum = exports.Dgcer500ApplicationJsonErrorDescriptionEnum || (exports.Dgcer500ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer500ApplicationJson, _super);
    function Dgcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgcer500ApplicationJson = Dgcer500ApplicationJson;
var Dgcer502ApplicationJsonErrorEnum;
(function (Dgcer502ApplicationJsonErrorEnum) {
    Dgcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dgcer502ApplicationJsonErrorEnum = exports.Dgcer502ApplicationJsonErrorEnum || (exports.Dgcer502ApplicationJsonErrorEnum = {}));
var Dgcer502ApplicationJsonErrorDescriptionEnum;
(function (Dgcer502ApplicationJsonErrorDescriptionEnum) {
    Dgcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dgcer502ApplicationJsonErrorDescriptionEnum = exports.Dgcer502ApplicationJsonErrorDescriptionEnum || (exports.Dgcer502ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer502ApplicationJson, _super);
    function Dgcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgcer502ApplicationJson = Dgcer502ApplicationJson;
var Dgcer503ApplicationJsonErrorEnum;
(function (Dgcer503ApplicationJsonErrorEnum) {
    Dgcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dgcer503ApplicationJsonErrorEnum = exports.Dgcer503ApplicationJsonErrorEnum || (exports.Dgcer503ApplicationJsonErrorEnum = {}));
var Dgcer503ApplicationJsonErrorDescriptionEnum;
(function (Dgcer503ApplicationJsonErrorDescriptionEnum) {
    Dgcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dgcer503ApplicationJsonErrorDescriptionEnum = exports.Dgcer503ApplicationJsonErrorDescriptionEnum || (exports.Dgcer503ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer503ApplicationJson, _super);
    function Dgcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgcer503ApplicationJson = Dgcer503ApplicationJson;
var Dgcer504ApplicationJsonErrorEnum;
(function (Dgcer504ApplicationJsonErrorEnum) {
    Dgcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dgcer504ApplicationJsonErrorEnum = exports.Dgcer504ApplicationJsonErrorEnum || (exports.Dgcer504ApplicationJsonErrorEnum = {}));
var Dgcer504ApplicationJsonErrorDescriptionEnum;
(function (Dgcer504ApplicationJsonErrorDescriptionEnum) {
    Dgcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dgcer504ApplicationJsonErrorDescriptionEnum = exports.Dgcer504ApplicationJsonErrorDescriptionEnum || (exports.Dgcer504ApplicationJsonErrorDescriptionEnum = {}));
var Dgcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgcer504ApplicationJson, _super);
    function Dgcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Dgcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgcer504ApplicationJson = Dgcer504ApplicationJson;
var DgcerRequest = /** @class */ (function (_super) {
    __extends(DgcerRequest, _super);
    function DgcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DgcerRequestBody)
    ], DgcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DgcerSecurity)
    ], DgcerRequest.prototype, "security", void 0);
    return DgcerRequest;
}(utils_1.SpeakeasyBase));
exports.DgcerRequest = DgcerRequest;
var DgcerResponse = /** @class */ (function (_super) {
    __extends(DgcerResponse, _super);
    function DgcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DgcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DgcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgcer400ApplicationJson)
    ], DgcerResponse.prototype, "dgcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgcer401ApplicationJson)
    ], DgcerResponse.prototype, "dgcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgcer404ApplicationJson)
    ], DgcerResponse.prototype, "dgcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgcer500ApplicationJson)
    ], DgcerResponse.prototype, "dgcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgcer502ApplicationJson)
    ], DgcerResponse.prototype, "dgcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgcer503ApplicationJson)
    ], DgcerResponse.prototype, "dgcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgcer504ApplicationJson)
    ], DgcerResponse.prototype, "dgcer504ApplicationJSONObject", void 0);
    return DgcerResponse;
}(utils_1.SpeakeasyBase));
exports.DgcerResponse = DgcerResponse;
