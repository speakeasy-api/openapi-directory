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
exports.DpicrResponse = exports.DpicrRequest = exports.Dpicr504ApplicationJson = exports.Dpicr504ApplicationJsonErrorDescriptionEnum = exports.Dpicr504ApplicationJsonErrorEnum = exports.Dpicr503ApplicationJson = exports.Dpicr503ApplicationJsonErrorDescriptionEnum = exports.Dpicr503ApplicationJsonErrorEnum = exports.Dpicr502ApplicationJson = exports.Dpicr502ApplicationJsonErrorDescriptionEnum = exports.Dpicr502ApplicationJsonErrorEnum = exports.Dpicr500ApplicationJson = exports.Dpicr500ApplicationJsonErrorDescriptionEnum = exports.Dpicr500ApplicationJsonErrorEnum = exports.Dpicr404ApplicationJson = exports.Dpicr404ApplicationJsonErrorDescriptionEnum = exports.Dpicr404ApplicationJsonErrorEnum = exports.Dpicr401ApplicationJson = exports.Dpicr401ApplicationJsonErrorDescriptionEnum = exports.Dpicr401ApplicationJsonErrorEnum = exports.Dpicr400ApplicationJson = exports.Dpicr400ApplicationJsonErrorDescriptionEnum = exports.Dpicr400ApplicationJsonErrorEnum = exports.DpicrSecurity = exports.DpicrRequestBody = exports.DpicrRequestBodyFormatEnum = exports.DpicrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DpicrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DpicrRequestBodyCertificateParameters, _super);
    function DpicrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CERT_NO" }),
        __metadata("design:type", String)
    ], DpicrRequestBodyCertificateParameters.prototype, "certNO", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], DpicrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    return DpicrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.DpicrRequestBodyCertificateParameters = DpicrRequestBodyCertificateParameters;
var DpicrRequestBodyFormatEnum;
(function (DpicrRequestBodyFormatEnum) {
    DpicrRequestBodyFormatEnum["Pdf"] = "pdf";
})(DpicrRequestBodyFormatEnum = exports.DpicrRequestBodyFormatEnum || (exports.DpicrRequestBodyFormatEnum = {}));
var DpicrRequestBody = /** @class */ (function (_super) {
    __extends(DpicrRequestBody, _super);
    function DpicrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DpicrRequestBodyCertificateParameters)
    ], DpicrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DpicrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DpicrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DpicrRequestBody.prototype, "txnId", void 0);
    return DpicrRequestBody;
}(utils_1.SpeakeasyBase));
exports.DpicrRequestBody = DpicrRequestBody;
var DpicrSecurity = /** @class */ (function (_super) {
    __extends(DpicrSecurity, _super);
    function DpicrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DpicrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DpicrSecurity.prototype, "clientId", void 0);
    return DpicrSecurity;
}(utils_1.SpeakeasyBase));
exports.DpicrSecurity = DpicrSecurity;
var Dpicr400ApplicationJsonErrorEnum;
(function (Dpicr400ApplicationJsonErrorEnum) {
    Dpicr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dpicr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dpicr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dpicr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dpicr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dpicr400ApplicationJsonErrorEnum = exports.Dpicr400ApplicationJsonErrorEnum || (exports.Dpicr400ApplicationJsonErrorEnum = {}));
var Dpicr400ApplicationJsonErrorDescriptionEnum;
(function (Dpicr400ApplicationJsonErrorDescriptionEnum) {
    Dpicr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dpicr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dpicr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dpicr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dpicr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dpicr400ApplicationJsonErrorDescriptionEnum = exports.Dpicr400ApplicationJsonErrorDescriptionEnum || (exports.Dpicr400ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr400ApplicationJson, _super);
    function Dpicr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr400ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpicr400ApplicationJson = Dpicr400ApplicationJson;
var Dpicr401ApplicationJsonErrorEnum;
(function (Dpicr401ApplicationJsonErrorEnum) {
    Dpicr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dpicr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dpicr401ApplicationJsonErrorEnum = exports.Dpicr401ApplicationJsonErrorEnum || (exports.Dpicr401ApplicationJsonErrorEnum = {}));
var Dpicr401ApplicationJsonErrorDescriptionEnum;
(function (Dpicr401ApplicationJsonErrorDescriptionEnum) {
    Dpicr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dpicr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dpicr401ApplicationJsonErrorDescriptionEnum = exports.Dpicr401ApplicationJsonErrorDescriptionEnum || (exports.Dpicr401ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr401ApplicationJson, _super);
    function Dpicr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr401ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpicr401ApplicationJson = Dpicr401ApplicationJson;
var Dpicr404ApplicationJsonErrorEnum;
(function (Dpicr404ApplicationJsonErrorEnum) {
    Dpicr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dpicr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dpicr404ApplicationJsonErrorEnum = exports.Dpicr404ApplicationJsonErrorEnum || (exports.Dpicr404ApplicationJsonErrorEnum = {}));
var Dpicr404ApplicationJsonErrorDescriptionEnum;
(function (Dpicr404ApplicationJsonErrorDescriptionEnum) {
    Dpicr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dpicr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dpicr404ApplicationJsonErrorDescriptionEnum = exports.Dpicr404ApplicationJsonErrorDescriptionEnum || (exports.Dpicr404ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr404ApplicationJson, _super);
    function Dpicr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr404ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpicr404ApplicationJson = Dpicr404ApplicationJson;
var Dpicr500ApplicationJsonErrorEnum;
(function (Dpicr500ApplicationJsonErrorEnum) {
    Dpicr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dpicr500ApplicationJsonErrorEnum = exports.Dpicr500ApplicationJsonErrorEnum || (exports.Dpicr500ApplicationJsonErrorEnum = {}));
var Dpicr500ApplicationJsonErrorDescriptionEnum;
(function (Dpicr500ApplicationJsonErrorDescriptionEnum) {
    Dpicr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dpicr500ApplicationJsonErrorDescriptionEnum = exports.Dpicr500ApplicationJsonErrorDescriptionEnum || (exports.Dpicr500ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr500ApplicationJson, _super);
    function Dpicr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr500ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpicr500ApplicationJson = Dpicr500ApplicationJson;
var Dpicr502ApplicationJsonErrorEnum;
(function (Dpicr502ApplicationJsonErrorEnum) {
    Dpicr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dpicr502ApplicationJsonErrorEnum = exports.Dpicr502ApplicationJsonErrorEnum || (exports.Dpicr502ApplicationJsonErrorEnum = {}));
var Dpicr502ApplicationJsonErrorDescriptionEnum;
(function (Dpicr502ApplicationJsonErrorDescriptionEnum) {
    Dpicr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dpicr502ApplicationJsonErrorDescriptionEnum = exports.Dpicr502ApplicationJsonErrorDescriptionEnum || (exports.Dpicr502ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr502ApplicationJson, _super);
    function Dpicr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr502ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpicr502ApplicationJson = Dpicr502ApplicationJson;
var Dpicr503ApplicationJsonErrorEnum;
(function (Dpicr503ApplicationJsonErrorEnum) {
    Dpicr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dpicr503ApplicationJsonErrorEnum = exports.Dpicr503ApplicationJsonErrorEnum || (exports.Dpicr503ApplicationJsonErrorEnum = {}));
var Dpicr503ApplicationJsonErrorDescriptionEnum;
(function (Dpicr503ApplicationJsonErrorDescriptionEnum) {
    Dpicr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dpicr503ApplicationJsonErrorDescriptionEnum = exports.Dpicr503ApplicationJsonErrorDescriptionEnum || (exports.Dpicr503ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr503ApplicationJson, _super);
    function Dpicr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr503ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpicr503ApplicationJson = Dpicr503ApplicationJson;
var Dpicr504ApplicationJsonErrorEnum;
(function (Dpicr504ApplicationJsonErrorEnum) {
    Dpicr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dpicr504ApplicationJsonErrorEnum = exports.Dpicr504ApplicationJsonErrorEnum || (exports.Dpicr504ApplicationJsonErrorEnum = {}));
var Dpicr504ApplicationJsonErrorDescriptionEnum;
(function (Dpicr504ApplicationJsonErrorDescriptionEnum) {
    Dpicr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dpicr504ApplicationJsonErrorDescriptionEnum = exports.Dpicr504ApplicationJsonErrorDescriptionEnum || (exports.Dpicr504ApplicationJsonErrorDescriptionEnum = {}));
var Dpicr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpicr504ApplicationJson, _super);
    function Dpicr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpicr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpicr504ApplicationJson.prototype, "errorDescription", void 0);
    return Dpicr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpicr504ApplicationJson = Dpicr504ApplicationJson;
var DpicrRequest = /** @class */ (function (_super) {
    __extends(DpicrRequest, _super);
    function DpicrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DpicrRequestBody)
    ], DpicrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DpicrSecurity)
    ], DpicrRequest.prototype, "security", void 0);
    return DpicrRequest;
}(utils_1.SpeakeasyBase));
exports.DpicrRequest = DpicrRequest;
var DpicrResponse = /** @class */ (function (_super) {
    __extends(DpicrResponse, _super);
    function DpicrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DpicrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DpicrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpicr400ApplicationJson)
    ], DpicrResponse.prototype, "dpicr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpicr401ApplicationJson)
    ], DpicrResponse.prototype, "dpicr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpicr404ApplicationJson)
    ], DpicrResponse.prototype, "dpicr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpicr500ApplicationJson)
    ], DpicrResponse.prototype, "dpicr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpicr502ApplicationJson)
    ], DpicrResponse.prototype, "dpicr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpicr503ApplicationJson)
    ], DpicrResponse.prototype, "dpicr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpicr504ApplicationJson)
    ], DpicrResponse.prototype, "dpicr504ApplicationJSONObject", void 0);
    return DpicrResponse;
}(utils_1.SpeakeasyBase));
exports.DpicrResponse = DpicrResponse;
