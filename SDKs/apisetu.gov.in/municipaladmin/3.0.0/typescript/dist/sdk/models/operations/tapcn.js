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
exports.TapcnResponse = exports.TapcnRequest = exports.Tapcn504ApplicationJson = exports.Tapcn504ApplicationJsonErrorDescriptionEnum = exports.Tapcn504ApplicationJsonErrorEnum = exports.Tapcn503ApplicationJson = exports.Tapcn503ApplicationJsonErrorDescriptionEnum = exports.Tapcn503ApplicationJsonErrorEnum = exports.Tapcn502ApplicationJson = exports.Tapcn502ApplicationJsonErrorDescriptionEnum = exports.Tapcn502ApplicationJsonErrorEnum = exports.Tapcn500ApplicationJson = exports.Tapcn500ApplicationJsonErrorDescriptionEnum = exports.Tapcn500ApplicationJsonErrorEnum = exports.Tapcn404ApplicationJson = exports.Tapcn404ApplicationJsonErrorDescriptionEnum = exports.Tapcn404ApplicationJsonErrorEnum = exports.Tapcn401ApplicationJson = exports.Tapcn401ApplicationJsonErrorDescriptionEnum = exports.Tapcn401ApplicationJsonErrorEnum = exports.Tapcn400ApplicationJson = exports.Tapcn400ApplicationJsonErrorDescriptionEnum = exports.Tapcn400ApplicationJsonErrorEnum = exports.TapcnSecurity = exports.TapcnRequestBody = exports.TapcnRequestBodyFormatEnum = exports.TapcnRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TapcnRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TapcnRequestBodyCertificateParameters, _super);
    function TapcnRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DocumentNumber" }),
        __metadata("design:type", String)
    ], TapcnRequestBodyCertificateParameters.prototype, "documentNumber", void 0);
    return TapcnRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.TapcnRequestBodyCertificateParameters = TapcnRequestBodyCertificateParameters;
var TapcnRequestBodyFormatEnum;
(function (TapcnRequestBodyFormatEnum) {
    TapcnRequestBodyFormatEnum["Pdf"] = "pdf";
})(TapcnRequestBodyFormatEnum = exports.TapcnRequestBodyFormatEnum || (exports.TapcnRequestBodyFormatEnum = {}));
var TapcnRequestBody = /** @class */ (function (_super) {
    __extends(TapcnRequestBody, _super);
    function TapcnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TapcnRequestBodyCertificateParameters)
    ], TapcnRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TapcnRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TapcnRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TapcnRequestBody.prototype, "txnId", void 0);
    return TapcnRequestBody;
}(utils_1.SpeakeasyBase));
exports.TapcnRequestBody = TapcnRequestBody;
var TapcnSecurity = /** @class */ (function (_super) {
    __extends(TapcnSecurity, _super);
    function TapcnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TapcnSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TapcnSecurity.prototype, "clientId", void 0);
    return TapcnSecurity;
}(utils_1.SpeakeasyBase));
exports.TapcnSecurity = TapcnSecurity;
var Tapcn400ApplicationJsonErrorEnum;
(function (Tapcn400ApplicationJsonErrorEnum) {
    Tapcn400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tapcn400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tapcn400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tapcn400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tapcn400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tapcn400ApplicationJsonErrorEnum = exports.Tapcn400ApplicationJsonErrorEnum || (exports.Tapcn400ApplicationJsonErrorEnum = {}));
var Tapcn400ApplicationJsonErrorDescriptionEnum;
(function (Tapcn400ApplicationJsonErrorDescriptionEnum) {
    Tapcn400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tapcn400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tapcn400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tapcn400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tapcn400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tapcn400ApplicationJsonErrorDescriptionEnum = exports.Tapcn400ApplicationJsonErrorDescriptionEnum || (exports.Tapcn400ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn400ApplicationJson, _super);
    function Tapcn400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn400ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tapcn400ApplicationJson = Tapcn400ApplicationJson;
var Tapcn401ApplicationJsonErrorEnum;
(function (Tapcn401ApplicationJsonErrorEnum) {
    Tapcn401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tapcn401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tapcn401ApplicationJsonErrorEnum = exports.Tapcn401ApplicationJsonErrorEnum || (exports.Tapcn401ApplicationJsonErrorEnum = {}));
var Tapcn401ApplicationJsonErrorDescriptionEnum;
(function (Tapcn401ApplicationJsonErrorDescriptionEnum) {
    Tapcn401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tapcn401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tapcn401ApplicationJsonErrorDescriptionEnum = exports.Tapcn401ApplicationJsonErrorDescriptionEnum || (exports.Tapcn401ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn401ApplicationJson, _super);
    function Tapcn401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn401ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tapcn401ApplicationJson = Tapcn401ApplicationJson;
var Tapcn404ApplicationJsonErrorEnum;
(function (Tapcn404ApplicationJsonErrorEnum) {
    Tapcn404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tapcn404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tapcn404ApplicationJsonErrorEnum = exports.Tapcn404ApplicationJsonErrorEnum || (exports.Tapcn404ApplicationJsonErrorEnum = {}));
var Tapcn404ApplicationJsonErrorDescriptionEnum;
(function (Tapcn404ApplicationJsonErrorDescriptionEnum) {
    Tapcn404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tapcn404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tapcn404ApplicationJsonErrorDescriptionEnum = exports.Tapcn404ApplicationJsonErrorDescriptionEnum || (exports.Tapcn404ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn404ApplicationJson, _super);
    function Tapcn404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn404ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tapcn404ApplicationJson = Tapcn404ApplicationJson;
var Tapcn500ApplicationJsonErrorEnum;
(function (Tapcn500ApplicationJsonErrorEnum) {
    Tapcn500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tapcn500ApplicationJsonErrorEnum = exports.Tapcn500ApplicationJsonErrorEnum || (exports.Tapcn500ApplicationJsonErrorEnum = {}));
var Tapcn500ApplicationJsonErrorDescriptionEnum;
(function (Tapcn500ApplicationJsonErrorDescriptionEnum) {
    Tapcn500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tapcn500ApplicationJsonErrorDescriptionEnum = exports.Tapcn500ApplicationJsonErrorDescriptionEnum || (exports.Tapcn500ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn500ApplicationJson, _super);
    function Tapcn500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn500ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tapcn500ApplicationJson = Tapcn500ApplicationJson;
var Tapcn502ApplicationJsonErrorEnum;
(function (Tapcn502ApplicationJsonErrorEnum) {
    Tapcn502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tapcn502ApplicationJsonErrorEnum = exports.Tapcn502ApplicationJsonErrorEnum || (exports.Tapcn502ApplicationJsonErrorEnum = {}));
var Tapcn502ApplicationJsonErrorDescriptionEnum;
(function (Tapcn502ApplicationJsonErrorDescriptionEnum) {
    Tapcn502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tapcn502ApplicationJsonErrorDescriptionEnum = exports.Tapcn502ApplicationJsonErrorDescriptionEnum || (exports.Tapcn502ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn502ApplicationJson, _super);
    function Tapcn502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn502ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tapcn502ApplicationJson = Tapcn502ApplicationJson;
var Tapcn503ApplicationJsonErrorEnum;
(function (Tapcn503ApplicationJsonErrorEnum) {
    Tapcn503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tapcn503ApplicationJsonErrorEnum = exports.Tapcn503ApplicationJsonErrorEnum || (exports.Tapcn503ApplicationJsonErrorEnum = {}));
var Tapcn503ApplicationJsonErrorDescriptionEnum;
(function (Tapcn503ApplicationJsonErrorDescriptionEnum) {
    Tapcn503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tapcn503ApplicationJsonErrorDescriptionEnum = exports.Tapcn503ApplicationJsonErrorDescriptionEnum || (exports.Tapcn503ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn503ApplicationJson, _super);
    function Tapcn503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn503ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tapcn503ApplicationJson = Tapcn503ApplicationJson;
var Tapcn504ApplicationJsonErrorEnum;
(function (Tapcn504ApplicationJsonErrorEnum) {
    Tapcn504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tapcn504ApplicationJsonErrorEnum = exports.Tapcn504ApplicationJsonErrorEnum || (exports.Tapcn504ApplicationJsonErrorEnum = {}));
var Tapcn504ApplicationJsonErrorDescriptionEnum;
(function (Tapcn504ApplicationJsonErrorDescriptionEnum) {
    Tapcn504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tapcn504ApplicationJsonErrorDescriptionEnum = exports.Tapcn504ApplicationJsonErrorDescriptionEnum || (exports.Tapcn504ApplicationJsonErrorDescriptionEnum = {}));
var Tapcn504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tapcn504ApplicationJson, _super);
    function Tapcn504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tapcn504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tapcn504ApplicationJson.prototype, "errorDescription", void 0);
    return Tapcn504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tapcn504ApplicationJson = Tapcn504ApplicationJson;
var TapcnRequest = /** @class */ (function (_super) {
    __extends(TapcnRequest, _super);
    function TapcnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TapcnRequestBody)
    ], TapcnRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TapcnSecurity)
    ], TapcnRequest.prototype, "security", void 0);
    return TapcnRequest;
}(utils_1.SpeakeasyBase));
exports.TapcnRequest = TapcnRequest;
var TapcnResponse = /** @class */ (function (_super) {
    __extends(TapcnResponse, _super);
    function TapcnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TapcnResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TapcnResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tapcn400ApplicationJson)
    ], TapcnResponse.prototype, "tapcn400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tapcn401ApplicationJson)
    ], TapcnResponse.prototype, "tapcn401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tapcn404ApplicationJson)
    ], TapcnResponse.prototype, "tapcn404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tapcn500ApplicationJson)
    ], TapcnResponse.prototype, "tapcn500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tapcn502ApplicationJson)
    ], TapcnResponse.prototype, "tapcn502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tapcn503ApplicationJson)
    ], TapcnResponse.prototype, "tapcn503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tapcn504ApplicationJson)
    ], TapcnResponse.prototype, "tapcn504ApplicationJSONObject", void 0);
    return TapcnResponse;
}(utils_1.SpeakeasyBase));
exports.TapcnResponse = TapcnResponse;
