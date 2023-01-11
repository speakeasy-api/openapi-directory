import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HarvestAllV3QueryParams extends SpeakeasyBase {
    storeId?: string;
}
export declare class HarvestAllV3Request extends SpeakeasyBase {
    queryParams: HarvestAllV3QueryParams;
}
export declare class HarvestAllV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
