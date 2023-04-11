<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCertificateAuthorityRequest,
  CreateCertificateAuthorityResponse,
  CreateCertificateAuthorityXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  CertificateAuthorityUsageModeEnum,
  S3ObjectAclEnum,
  KeyStorageSecurityStandardEnum,
  CertificateAuthorityTypeEnum,
  SigningAlgorithmEnum,
  KeyAlgorithmEnum,
  AccessMethodTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCertificateAuthorityRequest = {
  createCertificateAuthorityRequest: {
    certificateAuthorityConfiguration: {
      csrExtensions: {
        keyUsage: {
          crlSign: false,
          dataEncipherment: false,
          decipherOnly: false,
          digitalSignature: false,
          encipherOnly: false,
          keyAgreement: false,
          keyCertSign: false,
          keyEncipherment: false,
          nonRepudiation: false,
        },
        subjectInformationAccess: [
          {
            accessLocation: {
              directoryName: {
                commonName: "provident",
                country: "Portugal",
                customAttributes: [
                  {
                    objectIdentifier: "unde",
                    value: "nulla",
                  },
                  {
                    objectIdentifier: "corrupti",
                    value: "illum",
                  },
                  {
                    objectIdentifier: "vel",
                    value: "error",
                  },
                  {
                    objectIdentifier: "deserunt",
                    value: "suscipit",
                  },
                ],
                distinguishedNameQualifier: "iure",
                generationQualifier: "magnam",
                givenName: "debitis",
                initials: "ipsa",
                locality: "delectus",
                organization: "tempora",
                organizationalUnit: "suscipit",
                pseudonym: "molestiae",
                serialNumber: "minus",
                state: "placeat",
                surname: "voluptatum",
                title: "Ms.",
              },
              dnsName: "excepturi",
              ediPartyName: {
                nameAssigner: "nisi",
                partyName: "recusandae",
              },
              ipAddress: "temporibus",
              otherName: {
                typeId: "ab",
                value: "quis",
              },
              registeredId: "veritatis",
              rfc822Name: "deserunt",
              uniformResourceIdentifier: "perferendis",
            },
            accessMethod: {
              accessMethodType: AccessMethodTypeEnum.ResourcePkiManifest,
              customObjectIdentifier: "repellendus",
            },
          },
          {
            accessLocation: {
              directoryName: {
                commonName: "sapiente",
                country: "San Marino",
                customAttributes: [
                  {
                    objectIdentifier: "at",
                    value: "at",
                  },
                ],
                distinguishedNameQualifier: "maiores",
                generationQualifier: "molestiae",
                givenName: "quod",
                initials: "quod",
                locality: "esse",
                organization: "totam",
                organizationalUnit: "porro",
                pseudonym: "dolorum",
                serialNumber: "dicta",
                state: "nam",
                surname: "officia",
                title: "Ms.",
              },
              dnsName: "fugit",
              ediPartyName: {
                nameAssigner: "deleniti",
                partyName: "hic",
              },
              ipAddress: "optio",
              otherName: {
                typeId: "totam",
                value: "beatae",
              },
              registeredId: "commodi",
              rfc822Name: "molestiae",
              uniformResourceIdentifier: "modi",
            },
            accessMethod: {
              accessMethodType: AccessMethodTypeEnum.CaRepository,
              customObjectIdentifier: "impedit",
            },
          },
          {
            accessLocation: {
              directoryName: {
                commonName: "cum",
                country: "Kenya",
                customAttributes: [
                  {
                    objectIdentifier: "excepturi",
                    value: "aspernatur",
                  },
                ],
                distinguishedNameQualifier: "perferendis",
                generationQualifier: "ad",
                givenName: "natus",
                initials: "sed",
                locality: "iste",
                organization: "dolor",
                organizationalUnit: "natus",
                pseudonym: "laboriosam",
                serialNumber: "hic",
                state: "saepe",
                surname: "fuga",
                title: "Ms.",
              },
              dnsName: "corporis",
              ediPartyName: {
                nameAssigner: "iste",
                partyName: "iure",
              },
              ipAddress: "saepe",
              otherName: {
                typeId: "quidem",
                value: "architecto",
              },
              registeredId: "ipsa",
              rfc822Name: "reiciendis",
              uniformResourceIdentifier: "est",
            },
            accessMethod: {
              accessMethodType: AccessMethodTypeEnum.ResourcePkiManifest,
              customObjectIdentifier: "laborum",
            },
          },
        ],
      },
      keyAlgorithm: KeyAlgorithmEnum.Rsa2048,
      signingAlgorithm: SigningAlgorithmEnum.Sha384Withecdsa,
      subject: {
        commonName: "corporis",
        country: "Brunei Darussalam",
        customAttributes: [
          {
            objectIdentifier: "enim",
            value: "omnis",
          },
          {
            objectIdentifier: "nemo",
            value: "minima",
          },
          {
            objectIdentifier: "excepturi",
            value: "accusantium",
          },
          {
            objectIdentifier: "iure",
            value: "culpa",
          },
        ],
        distinguishedNameQualifier: "doloribus",
        generationQualifier: "sapiente",
        givenName: "architecto",
        initials: "mollitia",
        locality: "dolorem",
        organization: "culpa",
        organizationalUnit: "consequuntur",
        pseudonym: "repellat",
        serialNumber: "mollitia",
        state: "occaecati",
        surname: "numquam",
        title: "Ms.",
      },
    },
    certificateAuthorityType: CertificateAuthorityTypeEnum.Root,
    idempotencyToken: "molestiae",
    keyStorageSecurityStandard: KeyStorageSecurityStandardEnum.Fips1402Level2OrHigher,
    revocationConfiguration: {
      crlConfiguration: {
        customCname: "error",
        enabled: false,
        expirationInDays: 158969,
        s3BucketName: "quis",
        s3ObjectAcl: S3ObjectAclEnum.PublicRead,
      },
      ocspConfiguration: {
        enabled: false,
        ocspCustomCname: "laborum",
      },
    },
    tags: [
      {
        key: "enim",
        value: "odit",
      },
      {
        key: "quo",
        value: "sequi",
      },
      {
        key: "tenetur",
        value: "ipsam",
      },
    ],
    usageMode: CertificateAuthorityUsageModeEnum.ShortLivedCertificate,
  },
  xAmzAlgorithm: "possimus",
  xAmzContentSha256: "aut",
  xAmzCredential: "quasi",
  xAmzDate: "error",
  xAmzSecurityToken: "temporibus",
  xAmzSignature: "laborum",
  xAmzSignedHeaders: "quasi",
  xAmzTarget: CreateCertificateAuthorityXAmzTargetEnum.ACMPrivateCACreateCertificateAuthority,
};

sdk.createCertificateAuthority(req).then((res: CreateCertificateAuthorityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->