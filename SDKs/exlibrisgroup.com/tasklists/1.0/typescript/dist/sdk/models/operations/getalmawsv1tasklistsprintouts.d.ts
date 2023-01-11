import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAlmawsV1TaskListsPrintoutsQueryParams extends SpeakeasyBase {
    letter?: string;
    limit?: number;
    offset?: number;
    printerId?: string;
    printoutId?: string;
    status?: string;
}
/**
 * The printer.
**/
export declare class GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Status of the printout (Pending/Printed/Canceled).
**/
export declare class GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Printout Object.
**/
export declare class GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout extends SpeakeasyBase {
    date?: Date;
    id?: string;
    letter?: string;
    link?: string;
    printer?: GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter;
    printout?: string;
    size?: string;
    source?: string;
    status?: GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus;
}
/**
 * A list of printouts.
**/
export declare class GetAlmawsV1TaskListsPrintouts200ApplicationJson extends SpeakeasyBase {
    printout?: GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout[];
    totalRecordCount?: number;
}
export declare class GetAlmawsV1TaskListsPrintoutsRequest extends SpeakeasyBase {
    queryParams: GetAlmawsV1TaskListsPrintoutsQueryParams;
}
export declare class GetAlmawsV1TaskListsPrintoutsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getAlmawsV1TaskListsPrintouts200ApplicationJSONObject?: GetAlmawsV1TaskListsPrintouts200ApplicationJson;
}
