import { SpeakeasyBase } from "../../../internal/utils";
import { Phone } from "./phone";
export declare class Authentication extends SpeakeasyBase {
    /**
     * The email address where the one-time password (OTP) is sent.
     */
    email?: string;
    /**
     * The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.
     *
     * @remarks
     *
     * * Characters between **a-z**, **A-Z**, and **0-9**
     *
     * * Special characters: **äöüßÄÖÜ+-* /ç%()=?!~#'",;:$&àùòâôûáúó**
     */
    password?: string;
    phone?: Phone;
}
