import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProfileRoleEnum {
    Admin = "admin",
    Ser = "ser"
}
/**
 * Successful GET on Profile resource
 */
export declare class Profile extends SpeakeasyBase {
    admin: boolean;
    conf?: string;
    email: string;
    id: number;
    idUser: number;
    lang?: string;
    role: ProfileRoleEnum;
    statut: number;
}
