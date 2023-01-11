import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HarvestAllQueryParams extends SpeakeasyBase {
    storeId?: string;
}
export declare class HarvestAllRequest extends SpeakeasyBase {
    queryParams: HarvestAllQueryParams;
}
export declare class HarvestAllResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
