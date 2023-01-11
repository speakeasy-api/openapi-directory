import dataclasses



@dataclasses.dataclass
class EaadharXamlSchemaKycResSignatureKeyInfoX509Data:
    x509_certificate: str = dataclasses.field()
    x509_subject_name: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResSignatureKeyInfo:
    x509_data: EaadharXamlSchemaKycResSignatureKeyInfoX509Data = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod:
    algorithm: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod:
    algorithm: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform:
    algorithm: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms:
    transform: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoReference:
    digest_method: EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod = dataclasses.field()
    digest_value: str = dataclasses.field()
    transforms: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms = dataclasses.field()
    uri: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod:
    algorithm: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResSignatureSignedInfo:
    canonicalization_method: EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod = dataclasses.field()
    reference: EaadharXamlSchemaKycResSignatureSignedInfoReference = dataclasses.field()
    signature_method: EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResSignature:
    key_info: EaadharXamlSchemaKycResSignatureKeyInfo = dataclasses.field()
    signature_value: str = dataclasses.field()
    signed_info: EaadharXamlSchemaKycResSignatureSignedInfo = dataclasses.field()
    xmlns: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResUIDDataLData:
    co: str = dataclasses.field()
    country: str = dataclasses.field()
    dist: str = dataclasses.field()
    lang: str = dataclasses.field()
    lm: str = dataclasses.field()
    loc: str = dataclasses.field()
    name: str = dataclasses.field()
    pc: str = dataclasses.field()
    state: str = dataclasses.field()
    vtc: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResUIDDataPoa:
    co: str = dataclasses.field()
    country: str = dataclasses.field()
    dist: str = dataclasses.field()
    lm: str = dataclasses.field()
    loc: str = dataclasses.field()
    pc: str = dataclasses.field()
    state: str = dataclasses.field()
    vtc: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResUIDDataPoi:
    dob: str = dataclasses.field()
    gender: str = dataclasses.field()
    name: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResUIDDataPrn:
    text: str = dataclasses.field()
    type: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycResUIDData:
    l_data: EaadharXamlSchemaKycResUIDDataLData = dataclasses.field()
    pht: str = dataclasses.field()
    poa: EaadharXamlSchemaKycResUIDDataPoa = dataclasses.field()
    poi: EaadharXamlSchemaKycResUIDDataPoi = dataclasses.field()
    prn: EaadharXamlSchemaKycResUIDDataPrn = dataclasses.field()
    tkn: str = dataclasses.field()
    uid: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchemaKycRes:
    rar: str = dataclasses.field()
    signature: EaadharXamlSchemaKycResSignature = dataclasses.field()
    uid_data: EaadharXamlSchemaKycResUIDData = dataclasses.field()
    code: str = dataclasses.field()
    ret: str = dataclasses.field()
    ts: str = dataclasses.field()
    ttl: str = dataclasses.field()
    txn: str = dataclasses.field()
    

@dataclasses.dataclass
class EaadharXamlSchema:
    kyc_res: EaadharXamlSchemaKycRes = dataclasses.field()
    
