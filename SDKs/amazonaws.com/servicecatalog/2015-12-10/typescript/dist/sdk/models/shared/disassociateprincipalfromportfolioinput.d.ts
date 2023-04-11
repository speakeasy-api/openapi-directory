import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
export declare class DisassociatePrincipalFromPortfolioInput extends SpeakeasyBase {
    acceptLanguage?: string;
    portfolioId: string;
    principalARN: string;
    principalType?: PrincipalTypeEnum;
}
