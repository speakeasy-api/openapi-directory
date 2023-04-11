import { SpeakeasyBase } from "../../../internal/utils";
import { CustomSMSSenderLambdaVersionTypeEnum } from "./customsmssenderlambdaversiontypeenum";
/**
 * A custom SMS sender Lambda configuration type.
 */
export declare class CustomSMSLambdaVersionConfigType extends SpeakeasyBase {
    lambdaArn: string;
    lambdaVersion: CustomSMSSenderLambdaVersionTypeEnum;
}
