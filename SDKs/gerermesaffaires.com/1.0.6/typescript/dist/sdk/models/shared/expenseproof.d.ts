import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExpenseProofAccountEnum {
    Cab = "CAB",
    Ikm = "IKM",
    Prk = "PRK",
    Txi = "TXI",
    Voy = "VOY",
    Ptt = "PTT",
    Fhr = "FHR",
    Div = "DIV",
    Res = "RES"
}
export declare enum ExpenseProofStatusEnum {
    R = "R",
    V = "V",
    W = "W"
}
export declare class ExpenseProof extends SpeakeasyBase {
    account?: ExpenseProofAccountEnum;
    archivalDate?: string;
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    expenseDate?: string;
    extension?: string;
    folderDate?: string;
    id?: string;
    inclVAT?: number;
    provider?: string;
    reason?: string;
    status?: ExpenseProofStatusEnum;
    title?: string;
    vat?: number;
}
