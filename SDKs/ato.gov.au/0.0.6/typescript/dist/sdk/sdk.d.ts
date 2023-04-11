import { AddressTypes } from "./addresstypes";
import { BusinessNameLifecycleStates } from "./businessnamelifecyclestates";
import { BusinessNames } from "./businessnames";
import { ElectronicAddressTypes } from "./electronicaddresstypes";
import { Genders } from "./genders";
import { Individuals } from "./individuals";
import { IndividualsAddresses } from "./individualsaddresses";
import { IndividualsBusinessNames } from "./individualsbusinessnames";
import { IndividualsElectronicAddresses } from "./individualselectronicaddresses";
import { IndividualsLicenses } from "./individualslicenses";
import { IndividualsRoles } from "./individualsroles";
import { LegalEntityTypes } from "./legalentitytypes";
import { LicenseLifecycleStates } from "./licenselifecyclestates";
import { Licenses } from "./licenses";
import { LicenseTypes } from "./licensetypes";
import { NameDirections } from "./namedirections";
import { NamePrefixes } from "./nameprefixes";
import { NameTypes } from "./nametypes";
import { Organisations } from "./organisations";
import { OrganisationsAddresses } from "./organisationsaddresses";
import { OrganisationsBusinessNames } from "./organisationsbusinessnames";
import { OrganisationsElectronicAddresses } from "./organisationselectronicaddresses";
import { OrganisationsLicenses } from "./organisationslicenses";
import { OrganisationsRoles } from "./organisationsroles";
import { RegisteredIdentifierTypes } from "./registeredidentifiertypes";
import { Roles } from "./roles";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["//api.abr.ato.gov.au/", "//api.sandbox.abr.ato.gov.au/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * # Introduction
 *
 * @remarks
 * The Business Registries API is built on HTTP. The API is RESTful. It has predictable resource URIs.
 *
 *   The API is documented in <a target="_blank" href="https://github.com/OAI/OpenAPI-Specification">OpenAPI</a> format.
 *   In addition to the standard OpenAPI syntax we use a few
 *   <a target="_blank" href="https://github.com/Rebilly/ReDoc/blob/master/docs/redoc-vendor-extensions.md">vendor extensions</a>.
 *
 * # Overview
 * The following sections describe the resources that make up the Business Registries REST API.
 * ## Current Version
 * By default, all requests to https://api.abr.ato.gov.au receive the `v1` version of the REST API. We encourage you to explicitly request this version via the `Accept` header.
 *
 *     Accept: application/vnd.abr-ato.v1+json
 *
 * ## Schema
 * All API access is over HTTPS, and accessed from https://api.abr.ato.gov.au. All data is sent and received as JSON. Blank fields are included.
 *
 *   All dates use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:
 *
 *     YYYY-MM-DD
 *
 *   For example: `2017-07-01` (the 1st of July 2017)
 *
 *   All timestamps use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format:
 *
 *     YYYY-MM-DDTHH:MM:SSZ
 *
 *   For example: `2017-07-01T11:05:06+10:00`
 *
 * ## Timezones
 * Some requests allow for specifying timestamps or generate timestamps with time zone information. We apply the following rules, in order of priority, to determine timezone information for API calls.
 * ### Explicitly provide an ISO 8601 timestamp with timezone information
 * For API calls that allow for a timestamp to be specified, we use that exact timestamp.
 *
 *   For example: `2017-07-01T11:05:06+10:00`
 *
 * ## Pagination
 * Information about pagination is provided in the [Link](https://tools.ietf.org/html/rfc5988#page-6) header.
 *
 *   For example:
 *
 *     Link: <https://api.abr.ato.gov.au/individuals?page=2>; rel="next",
 *           <https://api.abr.ato.gov.au/individuals?page=34>; rel="last"
 *
 * `rel="next"` states that the next page is `page=2`. This makes sense, since by default, all paginated queries start at page `1`. `rel="last"` provides some more information, stating that the last page of results is on `page 34`. Accordingly, we have 33 more pages of information that we can consume.
 * ## Parameters
 * Many API methods take optional parameters:
 *
 *     GET /individuals/1234/addresses/?addressType='Mailing'
 *
 * In this example, the '1234' value is provided for the `:partyId` parameter in the path while `:addressType` is passed in the query string.
 * For POST, PATCH, PUT, and DELETE requests, parameters not included in the URL should be encoded as JSON with a Content-Type of 'application/json'.
 * ## Metadata
 * The API provides **metadata services** that you can use to discover information about the classifcation schemes and values used by the Registry.
 *
 *   For example:
 *
 *     GET /classifications/roles
 *
 *   Sample response:
 *
 *     [
 *       {
 *         "id": "123e4567-e89b-12d3-a456-426655440001",
 *         "role": "Director",
 *         "roleDescription": "An individual responsible for managing a company's ...",
 *         "relationship": "Directorship",
 *         "reciprocalRole": "Company",
 *         "reciprocalRoleDescription": "An incorporated legal entity."
 *       },
 *       {
 *         ...
 *       }
 *     ]
 *
 * ## Root Endpoint
 * You can issue a GET request to the root endpoint (also known as the service root) to get all the endpoint categories that the REST API supports:
 *
 *     curl https://api.abr.ato.gov.au
 *
 * ## Authentication
 * The Business Registries API supports API Key authentication.
 *
 *   When you sign up for an account, you are given your first API key. You can generate additional API keys, and delete
 *   API keys (as you may need to rotate your keys in the future). You authenticate to the Business Registries API by
 *   providing your secret key in the request header.
 *
 *   **Note:** Some requests will return `404 Not Found`, instead of `403 Permission Denied`. This is to prevent the
 *   accidental leakage of information to unauthorised users.
 *
 */
export declare class SDK {
    /**
     * A classification scheme for addresses.
     *
     * @remarks
     *
     */
    addressTypes: AddressTypes;
    /**
     * A classification scheme for business names.
     *
     * @remarks
     *
     */
    businessNameLifecycleStates: BusinessNameLifecycleStates;
    /**
     * A business name is a name or title under which a person or organisation conducts a business.
     *
     * @remarks
     *
     */
    businessNames: BusinessNames;
    /**
     * A classification scheme for electronic addresses.
     *
     * @remarks
     *
     */
    electronicAddressTypes: ElectronicAddressTypes;
    /**
     * A classification scheme for the representation of human sexes.
     *
     * @remarks
     *
     */
    genders: Genders;
    /**
     * An individual is a person about whom the registry wishes to maintain information.
     *
     * @remarks
     *
     *   For example, the individual's date and place of birth (for the purposes of identification) and the individual's
     *   residential address (which is used for administrative purposes).
     *
     */
    individuals: Individuals;
    /**
     * The registry maintains information about an individual's contact details for administrative purposes.
     *
     * @remarks
     *
     *   Including:
     *   - an address for the service of documents
     *   - a principal place of business address
     *
     */
    individualsAddresses: IndividualsAddresses;
    /**
     * A business name is a name or title under which a person conducts a business.
     *
     * @remarks
     *
     */
    individualsBusinessNames: IndividualsBusinessNames;
    /**
     * The registry maintains information about an individual's contact details for administrative purposes.
     *
     * @remarks
     *
     *   Including:
     *   - an email address
     *   - a mobile number
     *
     */
    individualsElectronicAddresses: IndividualsElectronicAddresses;
    /**
     * If you carry on a business you may need to hold a licence.
     *
     * @remarks
     *
     *   For example, if you provide financial services, you are required to hold an Australian Financial
     *   Services (AFS) licence.
     *
     */
    individualsLicenses: IndividualsLicenses;
    /**
     * A role defines the characteristics of a relationship between parties.
     *
     * @remarks
     * An Individual can participate in a relationship with other individuals and organisations.
     *
     * For example:
     *
     * | Party         | Role           | Relationship     | Role          | Party                           |
     * | ------------- | -------------- | ---------------- | ------------- | ------------------------------- |
     * | Homer Simpson | Husband        | Marriage         | Wife          | Marge Simpson                   |
     * | Homer Simpson | Employee       | Employment       | Employer      | Springfield Nuclear Power Plant |
     * | Homer Simpson | Safety Officer | Colleague        | Supervisor    | Carl Carlson                    |
     * | Homer Simpson | Director       | Directorship     | Company       | Compu Global Hyper Mega Net     |
     * | Homer Simpson | Employee       | Employment       | Employer      | Compu Global Hyper Mega Net     |
     * | Homer Simpson | Member         | Membership       | Organisation  | The Stonecutters                |
     * | Homer Simpson | Partner        | Partnership      | Partnership   | The Be Sharps                   |
     * | Homer Simpson | Trustee        | Trusteeship      | Trust         | The Simpson Family Trust        |
     * | Homer Simpson | Member         | Membership       | Association   | Mensa International             |
     *
     * You can use the API's **metadata services** to retrieve information about the classifcation schemes and
     * values used by the Registry.
     *
     */
    individualsRoles: IndividualsRoles;
    /**
     * A classification scheme for parties (individuals and organisations).
     *
     * @remarks
     *
     */
    legalEntityTypes: LegalEntityTypes;
    /**
     * A classification scheme for licenses.
     *
     * @remarks
     *
     */
    licenseLifecycleStates: LicenseLifecycleStates;
    /**
     * A classification scheme for licenses.
     *
     * @remarks
     *
     */
    licenseTypes: LicenseTypes;
    /**
     * If you carry on a business you may need to hold a licence.
     *
     * @remarks
     *
     *   For example, if you provide financial services, you are required to hold an Australian Financial
     *   Services (AFS) licence.
     *
     */
    licenses: Licenses;
    /**
     * A classification scheme for names.
     *
     * @remarks
     *
     */
    nameDirections: NameDirections;
    /**
     * A classification scheme for names.
     *
     * @remarks
     *
     */
    namePrefixes: NamePrefixes;
    /**
     * A classification scheme for names.
     *
     * @remarks
     *
     */
    nameTypes: NameTypes;
    /**
     * An organisation usually consists of a number of individuals or groups bound by a common purpose about whom the
     *
     * @remarks
     * registry wishes to maintain information.
     *
     *   For example, the organisation's legal entity type (e.g., Incorporated Entity, Unincorporated Entity,
     *   Partnership or Joint Venture).
     *
     */
    organisations: Organisations;
    /**
     * The registry maintains information about an organisation's contact details for administrative purposes.
     *
     * @remarks
     *
     *   Including:
     *   - an address for the service of documents
     *   - a principal place of business address
     *
     */
    organisationsAddresses: OrganisationsAddresses;
    /**
     * A business name is a name or title under which an organisation conducts a business.
     *
     * @remarks
     *
     */
    organisationsBusinessNames: OrganisationsBusinessNames;
    /**
     * The registry maintains information about an organisation's contact details for administrative purposes.
     *
     * @remarks
     *
     *   Including:
     *   - an email address
     *   - a mobile number
     *
     */
    organisationsElectronicAddresses: OrganisationsElectronicAddresses;
    /**
     * If you carry on a business you may need to hold a licence.
     *
     * @remarks
     *
     *   For example, if you provide financial services, you are required to hold an Australian Financial
     *   Services (AFS) licence.
     *
     */
    organisationsLicenses: OrganisationsLicenses;
    /**
     * A role defines the characteristics of a relationship between parties.
     *
     * @remarks
     * An Organisation can participate in a relationship with other organisations and indiviuals.
     *
     * For example:
     *
     * | Party                           | Role     | Relationship | Role         | Party             |
     * | ------------------------------- | -------- | -------------| ------------ | ----------------- |
     * | Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Homer Simpson     |
     * | Springfield Nuclear Power Plant | Company  | Directorship | Director     | Mr Burns          |
     * | Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Mr Burns          |
     * | Springfield Nuclear Power Plant | Sponsor  | Sponsorship  | Organisation | The Stonecutters  |
     *
     * You can use the API's **metadata services** to retrieve information about the classifcation schemes and
     * values used by the Registry.
     *
     */
    organisationsRoles: OrganisationsRoles;
    /**
     * A classification scheme for registered identifiers.
     *
     * @remarks
     *
     */
    registeredIdentifierTypes: RegisteredIdentifierTypes;
    /**
     * A classification scheme for the characteristics of relationships between parties (individuals and organisations).
     *
     * @remarks
     *
     */
    roles: Roles;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
