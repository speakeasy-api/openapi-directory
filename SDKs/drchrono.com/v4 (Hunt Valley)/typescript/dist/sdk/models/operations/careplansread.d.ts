import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CarePlansReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CarePlansReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    planType?: number;
}
export declare class CarePlansReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CarePlansReadRequest extends SpeakeasyBase {
    pathParams: CarePlansReadPathParams;
    queryParams: CarePlansReadQueryParams;
    security: CarePlansReadSecurity;
}
export declare class CarePlansReadResponse extends SpeakeasyBase {
    carePlan?: shared.CarePlan;
    contentType: string;
    statusCode: number;
}
