import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The organization to export.
 */
export declare class CreateOrganizationExportRequestBody extends SpeakeasyBase {
    /**
     * An *organization_export* request starts a job to export the complete data of the given Organization.
     */
    data?: shared.OrganizationExportRequest;
}
export declare class CreateOrganizationExportRequest extends SpeakeasyBase {
    /**
     * The organization to export.
     */
    requestBody: CreateOrganizationExportRequestBody;
    /**
     * Results per page.
     *
     * @remarks
     * The number of objects to return per page. The value must be between 1 and 100.
     */
    limit?: number;
    /**
     * Offset token.
     *
     * @remarks
     * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
     * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
    /**
     * Defines fields to return.
     *
     * @remarks
     * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
     * The id of included objects will always be returned, regardless of the field options.
     */
    optFields?: string[];
    /**
     * Provides “pretty” output.
     *
     * @remarks
     * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     */
    optPretty?: boolean;
}
/**
 * Successfully created organization export request.
 */
export declare class CreateOrganizationExport201ApplicationJSON extends SpeakeasyBase {
    data?: shared.OrganizationExportResponse;
}
export declare class CreateOrganizationExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully created organization export request.
     */
    createOrganizationExport201ApplicationJSONObject?: CreateOrganizationExport201ApplicationJSON;
}
