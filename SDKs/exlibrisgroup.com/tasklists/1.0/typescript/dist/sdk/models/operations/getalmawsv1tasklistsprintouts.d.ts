import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAlmawsV1TaskListsPrintoutsRequest extends SpeakeasyBase {
    /**
     * Printout Name. Optional.
     */
    letter?: string;
    /**
     * Limits the number of results. Optional. Valid values are 0-100. Default value: 10.
     */
    limit?: number;
    /**
     * Offset of the results returned. Optional. Default value: 0, which means that the first results will be returned.
     */
    offset?: number;
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
/**
 * The printer.
 */
export declare class GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutPrinter extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Status of the printout (Pending/Printed/Canceled).
 */
export declare class GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Printout Object.
 */
export declare class GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintout extends SpeakeasyBase {
    /**
     * The time that the letter has been send to the Printout Queue.
     */
    date?: Date;
    /**
     * The printout id.
     */
    id?: string;
    /**
     * Letter Html body.
     */
    letter?: string;
    link?: string;
    /**
     * The printer.
     */
    printer?: GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutPrinter;
    /**
     * The printout name.
     */
    printout?: string;
    /**
     * The size of the letter.
     */
    size?: string;
    /**
     * The user who printed the letter.
     */
    source?: string;
    /**
     * Status of the printout (Pending/Printed/Canceled).
     */
    status?: GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutStatus;
}
/**
 * A list of printouts.
 */
export declare class GetAlmawsV1TaskListsPrintouts200ApplicationJSON extends SpeakeasyBase {
    /**
     * printout object.
     */
    printout?: GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintout[];
    /**
     * The total number of printouts.
     */
    totalRecordCount?: number;
}
export declare class GetAlmawsV1TaskListsPrintoutsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK - This method returns an object based on rest_printouts.xsd. See [here](/alma/apis/docs/xsd/rest_printouts.xsd)
     */
    getAlmawsV1TaskListsPrintouts200ApplicationJSONObject?: GetAlmawsV1TaskListsPrintouts200ApplicationJSON;
}
