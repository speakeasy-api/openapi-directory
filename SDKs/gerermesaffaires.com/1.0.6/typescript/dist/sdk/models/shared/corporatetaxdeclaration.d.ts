import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CorporateTaxDeclarationOrderEnum {
    OnestAdvance = "1st advance",
    TwondAdvance = "2nd advance",
    ThreerdAdvance = "3rd advance",
    FourthAdvance = "4th advance",
    Regularization = "regularization"
}
export declare class CorporateTaxDeclaration extends SpeakeasyBase {
    amount?: number;
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    declarationDate?: string;
    extension?: string;
    folderDate?: string;
    id?: string;
    order?: CorporateTaxDeclarationOrderEnum;
    rate?: number;
    taxBase?: number;
    title?: string;
}
