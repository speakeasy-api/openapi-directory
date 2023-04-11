import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAlmawsV1TaskListsPrintoutsRequest extends SpeakeasyBase {
    /**
     * Printout Name. Optional.
     */
    letter?: string;
    /**
     * The operation to perform on the printout. Currently, the options are: 'mark_as_printed','mark_as_canceled'
     */
    op: string;
    /**
     * Printout Printer
     */
    printerId?: string;
    /**
     * A list of Printout IDs (for example: 123,456,778) from 1 to the limit of 100 Optional. Use of this option overrides all of the filtering parameters
     */
    printoutId?: string;
    /**
     * Printout status. Optional. Valid values are: Printed, Pending, Canceled.
     */
    status?: string;
}
export declare class PostAlmawsV1TaskListsPrintoutsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK - This method returns an object based on rest_printouts.xsd. See [here](/alma/apis/docs/xsd/rest_printouts.xsd)
     */
    onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema?: shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema;
}
