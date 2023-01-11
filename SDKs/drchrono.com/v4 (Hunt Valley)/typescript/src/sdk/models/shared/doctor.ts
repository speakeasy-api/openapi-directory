import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DoctorCountryEnum {
    Bd = "BD",
    Wf = "WF",
    Bf = "BF",
    Bg = "BG",
    Ba = "BA",
    Bb = "BB",
    Be = "BE",
    Bl = "BL",
    Bm = "BM",
    Bn = "BN",
    Bo = "BO",
    Jp = "JP",
    Bi = "BI",
    Bj = "BJ",
    Bt = "BT",
    Jm = "JM",
    Bv = "BV",
    Jo = "JO",
    Ws = "WS",
    Bq = "BQ",
    Br = "BR",
    Bs = "BS",
    Je = "JE",
    By = "BY",
    Bz = "BZ",
    Ru = "RU",
    Rw = "RW",
    Rs = "RS",
    Tl = "TL",
    Re = "RE",
    Tm = "TM",
    Tj = "TJ",
    Ro = "RO",
    Tk = "TK",
    Gw = "GW",
    Gu = "GU",
    Gt = "GT",
    Gs = "GS",
    Gr = "GR",
    Gq = "GQ",
    Gp = "GP",
    Bh = "BH",
    Gy = "GY",
    Gg = "GG",
    Gf = "GF",
    Ge = "GE",
    Gd = "GD",
    Gb = "GB",
    Ga = "GA",
    Gn = "GN",
    Gm = "GM",
    Gl = "GL",
    Kw = "KW",
    Gi = "GI",
    Gh = "GH",
    Om = "OM",
    Tn = "TN",
    Bw = "BW",
    Hr = "HR",
    Ht = "HT",
    Hu = "HU",
    Hk = "HK",
    Hn = "HN",
    Hm = "HM",
    Kr = "KR",
    Ad = "AD",
    Pr = "PR",
    Ps = "PS",
    Pw = "PW",
    Pt = "PT",
    Kn = "KN",
    Py = "PY",
    Ai = "AI",
    Pa = "PA",
    Pf = "PF",
    Pg = "PG",
    Pe = "PE",
    Pk = "PK",
    Ph = "PH",
    Pn = "PN",
    Pl = "PL",
    Pm = "PM",
    Zm = "ZM",
    Eh = "EH",
    Ee = "EE",
    Eg = "EG",
    Za = "ZA",
    Ec = "EC",
    Al = "AL",
    Ao = "AO",
    Kz = "KZ",
    Et = "ET",
    Zw = "ZW",
    Ky = "KY",
    Es = "ES",
    Er = "ER",
    Me = "ME",
    Md = "MD",
    Mg = "MG",
    Mf = "MF",
    Ma = "MA",
    Mc = "MC",
    Uz = "UZ",
    Mm = "MM",
    Ml = "ML",
    Mo = "MO",
    Mn = "MN",
    Mh = "MH",
    Mk = "MK",
    Mu = "MU",
    Mt = "MT",
    Mw = "MW",
    Mv = "MV",
    Mq = "MQ",
    Mp = "MP",
    Ms = "MS",
    Mr = "MR",
    Au = "AU",
    Ug = "UG",
    My = "MY",
    Mx = "MX",
    Mz = "MZ",
    Fr = "FR",
    Aw = "AW",
    Af = "AF",
    Ax = "AX",
    Fi = "FI",
    Fj = "FJ",
    Fk = "FK",
    Fm = "FM",
    Fo = "FO",
    Ni = "NI",
    Nl = "NL",
    No = "NO",
    Na = "NA",
    Vu = "VU",
    Nc = "NC",
    Ne = "NE",
    Nf = "NF",
    Ng = "NG",
    Nz = "NZ",
    Np = "NP",
    Nr = "NR",
    Nu = "NU",
    Ck = "CK",
    Ci = "CI",
    Ch = "CH",
    Co = "CO",
    Cn = "CN",
    Cm = "CM",
    Cl = "CL",
    Cc = "CC",
    Ca = "CA",
    Cg = "CG",
    Cf = "CF",
    Cd = "CD",
    Cz = "CZ",
    Cy = "CY",
    Cx = "CX",
    Cr = "CR",
    Kp = "KP",
    Cw = "CW",
    Cv = "CV",
    Cu = "CU",
    Sz = "SZ",
    Sy = "SY",
    Sx = "SX",
    Kg = "KG",
    Ke = "KE",
    Ss = "SS",
    Sr = "SR",
    Ki = "KI",
    Kh = "KH",
    Sv = "SV",
    Km = "KM",
    St = "ST",
    Sk = "SK",
    Sj = "SJ",
    Si = "SI",
    Sh = "SH",
    So = "SO",
    Sn = "SN",
    Sm = "SM",
    Sl = "SL",
    Sc = "SC",
    Sb = "SB",
    Sa = "SA",
    Sg = "SG",
    Se = "SE",
    Sd = "SD",
    Do = "DO",
    Dm = "DM",
    Dj = "DJ",
    Dk = "DK",
    De = "DE",
    Ye = "YE",
    At = "AT",
    Dz = "DZ",
    Us = "US",
    Uy = "UY",
    Yt = "YT",
    Um = "UM",
    Lb = "LB",
    Lc = "LC",
    La = "LA",
    Tv = "TV",
    Tw = "TW",
    Tt = "TT",
    Tr = "TR",
    Lk = "LK",
    Li = "LI",
    Lv = "LV",
    To = "TO",
    Lt = "LT",
    Lu = "LU",
    Lr = "LR",
    Ls = "LS",
    Th = "TH",
    Tf = "TF",
    Tg = "TG",
    Td = "TD",
    Tc = "TC",
    Ly = "LY",
    Va = "VA",
    Vc = "VC",
    Ae = "AE",
    Ve = "VE",
    Ag = "AG",
    Vg = "VG",
    Iq = "IQ",
    Vi = "VI",
    Is = "IS",
    Ir = "IR",
    Am = "AM",
    It = "IT",
    Vn = "VN",
    Aq = "AQ",
    As = "AS",
    Ar = "AR",
    Im = "IM",
    Il = "IL",
    Io = "IO",
    In = "IN",
    Tz = "TZ",
    Az = "AZ",
    Ie = "IE",
    Id = "ID",
    Ua = "UA",
    Qa = "QA"
}

export enum DoctorJobTitleEnum {
    Unknown = "",
    ProviderStaffPrivatePractice = "Provider/Staff (Private Practice)",
    ProviderStaffHospital = "Provider/Staff (Hospital)",
    PatientsInterviewCandidate = "Patients/Interview Candidate",
    EducatorStudent = "Educator/Student",
    ApiDeveloper = "API/Developer",
    Consultant = "Consultant",
    Other = "Other"
}


export class Doctor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cell_phone" })
  cellPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: DoctorCountryEnum;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=group_npi_number" })
  groupNpiNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=home_phone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_account_suspended" })
  isAccountSuspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=job_title" })
  jobTitle?: DoctorJobTitleEnum;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=npi_number" })
  npiNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=office_phone" })
  officePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=practice_group" })
  practiceGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=practice_group_name" })
  practiceGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=profile_picture" })
  profilePicture?: string;

  @SpeakeasyMetadata({ data: "json, name=specialty" })
  specialty?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
