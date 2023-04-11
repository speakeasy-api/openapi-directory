import { SpeakeasyBase } from "../../../internal/utils";
/**
 *
 * @remarks
 * Value | Description
 * --- | ----
 * `'1'` | Medical Care
 * `'2'` | Surgical
 * `'3'` | Consultation
 * `'4'` | Diagnostic X-Ray
 * `'5'` | Diagnostic Lab
 * `'6'` | Radiation Therapy
 * `'7'` | Anesthesia
 * `'8'` | Surgical Assistance
 * `'9'` | Other Medical
 * `'10'` | Blood Charges
 * `'11'` | Used Durable Medical Equipment
 * `'12'` | Durable Medical Equipment Purchase
 * `'13'` | Ambulatory Service Center Facility
 * `'14'` | Renal Supplies in the Home
 * `'15'` | Alternate Method Dialysis
 * `'16'` | Chronic Renal Disease (CRD) Equipment
 * `'17'` | Pre-Admission Testing
 * `'18'` | Durable Medical Equipment Rental
 * `'19'` | Pneumonia Vaccine
 * `'20'` | Second Surgical Opinion
 * `'21'` | Third Surgical Opinion
 * `'22'` | Social Work
 * `'23'` | Diagnostic Dental
 * `'24'` | Periodontics
 * `'25'` | Restorative
 * `'26'` | Endodontics
 * `'27'` | Maxillofacial Prosthetics
 * `'28'` | Adjunctive Dental Services
 * `'30'` | Health Benefit Plan Coverage
 * `'32'` | Plan Waiting Period
 * `'33'` | Chiropractic
 * `'34'` | Chiropractic Office Visits
 * `'35'` | Dental Care
 * `'36'` | Dental Crowns
 * `'37'` | Dental Accident
 * `'38'` | Orthodontics
 * `'39'` | Prosthodontics
 * `'40'` | Oral Surgery
 * `'41'` | Routine (Preventive) Dental
 * `'42'` | Home Health Care
 * `'43'` | Home Health Prescriptions
 * `'44'` | Home Health Visits
 * `'45'` | Hospice
 * `'46'` | Respite Care
 * `'47'` | Hospital
 * `'48'` | Hospital - Inpatient
 * `'49'` | Hospital - Room and Board
 * `'50'` | Hospital - Outpatient
 * `'51'` | Hospital - Emergency Accident
 * `'52'` | Hospital - Emergency Medical
 * `'53'` | Hospital - Ambulatory Surgical
 * `'54'` | Long Term Care
 * `'55'` | Major Medical
 * `'56'` | Medically Related Transportation
 * `'57'` | Air Transportation
 * `'58'` | Cabulance
 * `'59'` | Licensed Ambulance
 * `'60'` | General Benefits
 * `'61'` | In-vitro Fertilization
 * `'62'` | MRI/CAT Scan
 * `'63'` | Donor Procedures
 * `'64'` | Acupuncture
 * `'65'` | Newborn Care
 * `'66'` | Pathology
 * `'67'` | Smoking Cessation
 * `'68'` | Well Baby Care
 * `'69'` | Maternity
 * `'70'` | Transplants
 * `'71'` | Audiology Exam
 * `'72'` | Inhalation Therapy
 * `'73'` | Diagnostic Medical
 * `'74'` | Private Duty Nursing
 * `'75'` | Prosthetic Device
 * `'76'` | Dialysis
 * `'77'` | Otological Exam
 * `'78'` | Chemotherapy
 * `'79'` | Allergy Testing
 * `'80'` | Immunizations
 * `'81'` | Routine Physical
 * `'82'` | Family Planning
 * `'83'` | Infertility
 * `'84'` | Abortion
 * `'85'` | AIDS
 * `'86'` | Emergency Services
 * `'87'` | Cancer
 * `'88'` | Pharmacy
 * `'89'` | Free Standing Prescription Drug
 * `'90'` | Mail Order Prescription Drug
 * `'91'` | Brand Name Prescription Drug
 * `'92'` | Generic Prescription Drug
 * `'93'` | Podiatry
 * `'94'` | Podiatry - Office Visits
 * `'95'` | Podiatry - Nursing Home Visits
 * `'96'` | Professional (Physician)
 * `'97'` | Anesthesiologist
 * `'98'` | Professional (Physician) Visit - Office
 * `'99'` | Professional (Physician) Visit - Inpatient
 * `'A0'` | Professional (Physician) Visit - Outpatient
 * `'A1'` | Professional (Physician) Visit - Nursing Home
 * `'A2'` | Professional (Physician) Visit - Skilled Nursing Facility
 * `'A3'` | Professional (Physician) Visit - Home
 * `'A4'` | Psychiatric
 * `'A5'` | Psychiatric - Room and Board
 * `'A6'` | Psychotherapy
 * `'A7'` | Psychiatric - Inpatient
 * `'A8'` | Psychiatric - Outpatient
 * `'A9'` | Rehabilitation
 * `'AA'` | Rehabilitation - Room and Board
 * `'AB'` | Rehabilitation - Inpatient
 * `'AC'` | Rehabilitation - Outpatient
 * `'AD'` | Occupational Therapy
 * `'AE'` | Physical Medicine
 * `'AF'` | Speech Therapy
 * `'AG'` | Skilled Nursing Care
 * `'AH'` | Skilled Nursing Care - Room and Board
 * `'AI'` | Substance Abuse
 * `'AJ'` | Alcoholism
 * `'AK'` | Drug Addiction
 * `'AL'` | Vision (Optometry)
 * `'AM'` | Frames
 * `'AN'` | Routine Exam
 * `'AO'` | Lenses
 * `'AQ'` | Nonmedically Necessary Physical
 * `'AR'` | Experimental Drug Therapy
 * `'B1'` | Burn Care
 * `'B2'` | Brand Name Prescription Drug - Formulary
 * `'B3'` | Brand Name Prescription Drug - Non-Formulary
 * `'BA'` | Independent Medical Evaluation
 * `'BB'` | Partial Hospitalization (Psychiatric)
 * `'BC'` | Day Care (Psychiatric)
 * `'BD'` | Cognitive Therapy
 * `'BE'` | Massage Therapy
 * `'BF'` | Pulmonary Rehabilitation
 * `'BG'` | Cardiac Rehabilitation
 * `'BH'` | Pediatric
 * `'BI'` | Nursery
 * `'BJ'` | Skin
 * `'BK'` | Orthopedic
 * `'BL'` | Cardiac
 * `'BM'` | Lymphatic
 * `'BN'` | Gastrointestinal
 * `'BP'` | Endocrine
 * `'BQ'` | Neurology
 * `'BR'` | Eye
 * `'BS'` | Invasive Procedures
 * `'BT'` | Gynecological
 * `'BU'` | Obstetrical
 * `'BV'` | Obstetrical/Gynecological
 * `'BW'` | Mail Order Prescription Drug: Brand Name
 * `'BX'` | Mail Order Prescription Drug: Generic
 * `'BY'` | Physician Visit - Office: Sick
 * `'BZ'` | Physician Visit - Office: Well
 * `'C1'` | Coronary Care
 * `'CA'` | Private Duty Nursing - Inpatient
 * `'CB'` | Private Duty Nursing - Home
 * `'CC'` | Surgical Benefits - Professional (Physician)
 * `'CD'` | Surgical Benefits - Facility
 * `'CE'` | Mental Health Provider - Inpatient
 * `'CF'` | Mental Health Provider - Outpatient
 * `'CG'` | Mental Health Facility - Inpatient
 * `'CH'` | Mental Health Facility - Outpatient
 * `'CI'` | Substance Abuse Facility - Inpatient
 * `'CJ'` | Substance Abuse Facility - Outpatient
 * `'CK'` | Screening X-ray
 * `'CL'` | Screening laboratory
 * `'CM'` | Mammogram, High Risk Patient
 * `'CN'` | Mammogram, Low Risk Patient
 * `'CO'` | Flu Vaccination
 * `'CP'` | Eyewear and Eyewear Accessories
 * `'CQ'` | Case Management
 * `'DG'` | Dermatology
 * `'DM'` | Durable Medical Equipment
 * `'DS'` | Diabetic Supplies
 * `'GF'` | Generic Prescription Drug - Formulary
 * `'GN'` | Generic Prescription Drug - Non-Formulary
 * `'GY'` | Allergy
 * `'IC'` | Intensive Care
 * `'MH'` | Mental Health
 * `'NI'` | Neonatal Intensive Care
 * `'ON'` | Oncology
 * `'PT'` | Physical Therapy
 * `'PU'` | Pulmonary
 * `'RN'` | Renal
 * `'RT'` | Residential Psychiatric Treatment
 * `'TC'` | Transitional Care
 * `'TN'` | Transitional Nursery Care
 * `'UC'` | Urgent Care
 *
 */
export declare enum CoverageRequestServiceTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14",
    Fifteen = "15",
    Sixteen = "16",
    Seventeen = "17",
    Eighteen = "18",
    Nineteen = "19",
    Twenty = "20",
    TwentyOne = "21",
    TwentyTwo = "22",
    TwentyThree = "23",
    TwentyFour = "24",
    TwentyFive = "25",
    TwentySix = "26",
    TwentySeven = "27",
    TwentyEight = "28",
    Thirty = "30",
    ThirtyTwo = "32",
    ThirtyThree = "33",
    ThirtyFour = "34",
    ThirtyFive = "35",
    ThirtySix = "36",
    ThirtySeven = "37",
    ThirtyEight = "38",
    ThirtyNine = "39",
    Forty = "40",
    FortyOne = "41",
    FortyTwo = "42",
    FortyThree = "43",
    FortyFour = "44",
    FortyFive = "45",
    FortySix = "46",
    FortySeven = "47",
    FortyEight = "48",
    FortyNine = "49",
    Fifty = "50",
    FiftyOne = "51",
    FiftyTwo = "52",
    FiftyThree = "53",
    FiftyFour = "54",
    FiftyFive = "55",
    FiftySix = "56",
    FiftySeven = "57",
    FiftyEight = "58",
    FiftyNine = "59",
    Sixty = "60",
    SixtyOne = "61",
    SixtyTwo = "62",
    SixtyThree = "63",
    SixtyFour = "64",
    SixtyFive = "65",
    SixtySix = "66",
    SixtySeven = "67",
    SixtyEight = "68",
    SixtyNine = "69",
    Seventy = "70",
    SeventyOne = "71",
    SeventyTwo = "72",
    SeventyThree = "73",
    SeventyFour = "74",
    SeventyFive = "75",
    SeventySix = "76",
    SeventySeven = "77",
    SeventyEight = "78",
    SeventyNine = "79",
    Eighty = "80",
    EightyOne = "81",
    EightyTwo = "82",
    EightyThree = "83",
    EightyFour = "84",
    EightyFive = "85",
    EightySix = "86",
    EightySeven = "87",
    EightyEight = "88",
    EightyNine = "89",
    Ninety = "90",
    NinetyOne = "91",
    NinetyTwo = "92",
    NinetyThree = "93",
    NinetyFour = "94",
    NinetyFive = "95",
    NinetySix = "96",
    NinetySeven = "97",
    NinetyEight = "98",
    NinetyNine = "99",
    A0 = "A0",
    A1 = "A1",
    A2 = "A2",
    A3 = "A3",
    A4 = "A4",
    A5 = "A5",
    A6 = "A6",
    A7 = "A7",
    A8 = "A8",
    A9 = "A9",
    Aa = "AA",
    Ab = "AB",
    Ac = "AC",
    Ad = "AD",
    Ae = "AE",
    Af = "AF",
    Ag = "AG",
    Ah = "AH",
    Ai = "AI",
    Aj = "AJ",
    Ak = "AK",
    Al = "AL",
    Am = "AM",
    An = "AN",
    Ao = "AO",
    Aq = "AQ",
    Ar = "AR",
    B1 = "B1",
    B2 = "B2",
    B3 = "B3",
    Ba = "BA",
    Bb = "BB",
    Bc = "BC",
    Bd = "BD",
    Be = "BE",
    Bf = "BF",
    Bg = "BG",
    Bh = "BH",
    Bi = "BI",
    Bj = "BJ",
    Bk = "BK",
    Bl = "BL",
    Bm = "BM",
    Bn = "BN",
    Bp = "BP",
    Bq = "BQ",
    Br = "BR",
    Bs = "BS",
    Bt = "BT",
    Bu = "BU",
    Bv = "BV",
    Bw = "BW",
    Bx = "BX",
    By = "BY",
    Bz = "BZ",
    C1 = "C1",
    Ca = "CA",
    Cb = "CB",
    Cc = "CC",
    Cd = "CD",
    Ce = "CE",
    Cf = "CF",
    Cg = "CG",
    Ch = "CH",
    Ci = "CI",
    Cj = "CJ",
    Ck = "CK",
    Cl = "CL",
    Cm = "CM",
    Cn = "CN",
    Co = "CO",
    Cp = "CP",
    Cq = "CQ",
    Dg = "DG",
    Dm = "DM",
    Ds = "DS",
    Gf = "GF",
    Gn = "GN",
    Gy = "GY",
    Ic = "IC",
    Mh = "MH",
    Ni = "NI",
    On = "ON",
    Pt = "PT",
    Pu = "PU",
    Rn = "RN",
    Rt = "RT",
    Tc = "TC",
    Tn = "TN",
    Uc = "UC"
}
/**
 * OK
 */
export declare class Coverage extends SpeakeasyBase {
    appointment?: string;
    /**
     * The level of insurance the eligibility check was run on. Can be one of the following: `Primary Insurance` or `Secondary Insurance`
     */
    cobLevel?: string;
    /**
     * A variable size object containing the details of the eligibility check, if returned by the clearinghouse that ran the eligibility check
     */
    coverageDetails?: string;
    /**
     * A variable size object containing subscriber information, if returned by the clearinghouse that ran the eligibility check
     */
    coverageSubscriber?: string;
    /**
     *
     * @remarks
     * Value | Description
     * --- | ----
     * `'1'` | Active Coverage
     * `'2'` | Active - Full Risk Capitation
     * `'3'` | Active - Services Capitated
     * `'4'` | Active - Services Capitated to Primary Care Physician
     * `'5'` | Active - Pending Investigation
     * `'6'` | Inactive
     * `'7'` | Inactive - Pending Eligibility Update
     * `'8'` | Inactive - Pending Investigation
     * `'A'` | Co-Insurance
     * `'B'` | Co-Payment
     * `'C'` | Deductible
     * `'CB'` | Coverage Basis
     * `'D'` | Benefit Description
     * `'E'` | Exclusions
     * `'F'` | Limitations
     * `'G'` | Out of Pocket (Stop Loss)
     * `'H'` | Unlimited
     * `'I'` | Non-Covered
     * `'J'` | Cost Containment
     * `'K'` | Reserve
     * `'L'` | Primary Care Provider
     * `'M'` | Pre-existing Condition
     * `'MC'` | Managed Care Coordinator
     * `'N'` | Services Restricted to Following Provider
     * `'O'` | Not Deemed a Medical Necessity
     * `'P'` | Benefit Disclaimer
     * `'Q'` | Second Surgical Opinion Required
     * `'R'` | Other or Additional Payor
     * `'S'` | Prior Year(s) History
     * `'T'` | Card(s) Reported Lost/Stolen
     * `'U'` | Contact Following Entity for Eligibility or Benefit Information
     * `'V'` | Cannot Process
     * `'W'` | Other Source of Data
     * `'X'` | Health Care Facility
     * `'Y'` | Spend Down
     *
     */
    eligibility?: string;
    patient?: string;
    /**
     * The name of the payer as returned by the clearinghouse that ran the eligibility check
     */
    payerName?: string;
    /**
     * The time at which the request was made
     */
    queryDate?: string;
    /**
     *
     * @remarks
     * Value | Description
     * --- | ----
     * `'1'` | Medical Care
     * `'2'` | Surgical
     * `'3'` | Consultation
     * `'4'` | Diagnostic X-Ray
     * `'5'` | Diagnostic Lab
     * `'6'` | Radiation Therapy
     * `'7'` | Anesthesia
     * `'8'` | Surgical Assistance
     * `'9'` | Other Medical
     * `'10'` | Blood Charges
     * `'11'` | Used Durable Medical Equipment
     * `'12'` | Durable Medical Equipment Purchase
     * `'13'` | Ambulatory Service Center Facility
     * `'14'` | Renal Supplies in the Home
     * `'15'` | Alternate Method Dialysis
     * `'16'` | Chronic Renal Disease (CRD) Equipment
     * `'17'` | Pre-Admission Testing
     * `'18'` | Durable Medical Equipment Rental
     * `'19'` | Pneumonia Vaccine
     * `'20'` | Second Surgical Opinion
     * `'21'` | Third Surgical Opinion
     * `'22'` | Social Work
     * `'23'` | Diagnostic Dental
     * `'24'` | Periodontics
     * `'25'` | Restorative
     * `'26'` | Endodontics
     * `'27'` | Maxillofacial Prosthetics
     * `'28'` | Adjunctive Dental Services
     * `'30'` | Health Benefit Plan Coverage
     * `'32'` | Plan Waiting Period
     * `'33'` | Chiropractic
     * `'34'` | Chiropractic Office Visits
     * `'35'` | Dental Care
     * `'36'` | Dental Crowns
     * `'37'` | Dental Accident
     * `'38'` | Orthodontics
     * `'39'` | Prosthodontics
     * `'40'` | Oral Surgery
     * `'41'` | Routine (Preventive) Dental
     * `'42'` | Home Health Care
     * `'43'` | Home Health Prescriptions
     * `'44'` | Home Health Visits
     * `'45'` | Hospice
     * `'46'` | Respite Care
     * `'47'` | Hospital
     * `'48'` | Hospital - Inpatient
     * `'49'` | Hospital - Room and Board
     * `'50'` | Hospital - Outpatient
     * `'51'` | Hospital - Emergency Accident
     * `'52'` | Hospital - Emergency Medical
     * `'53'` | Hospital - Ambulatory Surgical
     * `'54'` | Long Term Care
     * `'55'` | Major Medical
     * `'56'` | Medically Related Transportation
     * `'57'` | Air Transportation
     * `'58'` | Cabulance
     * `'59'` | Licensed Ambulance
     * `'60'` | General Benefits
     * `'61'` | In-vitro Fertilization
     * `'62'` | MRI/CAT Scan
     * `'63'` | Donor Procedures
     * `'64'` | Acupuncture
     * `'65'` | Newborn Care
     * `'66'` | Pathology
     * `'67'` | Smoking Cessation
     * `'68'` | Well Baby Care
     * `'69'` | Maternity
     * `'70'` | Transplants
     * `'71'` | Audiology Exam
     * `'72'` | Inhalation Therapy
     * `'73'` | Diagnostic Medical
     * `'74'` | Private Duty Nursing
     * `'75'` | Prosthetic Device
     * `'76'` | Dialysis
     * `'77'` | Otological Exam
     * `'78'` | Chemotherapy
     * `'79'` | Allergy Testing
     * `'80'` | Immunizations
     * `'81'` | Routine Physical
     * `'82'` | Family Planning
     * `'83'` | Infertility
     * `'84'` | Abortion
     * `'85'` | AIDS
     * `'86'` | Emergency Services
     * `'87'` | Cancer
     * `'88'` | Pharmacy
     * `'89'` | Free Standing Prescription Drug
     * `'90'` | Mail Order Prescription Drug
     * `'91'` | Brand Name Prescription Drug
     * `'92'` | Generic Prescription Drug
     * `'93'` | Podiatry
     * `'94'` | Podiatry - Office Visits
     * `'95'` | Podiatry - Nursing Home Visits
     * `'96'` | Professional (Physician)
     * `'97'` | Anesthesiologist
     * `'98'` | Professional (Physician) Visit - Office
     * `'99'` | Professional (Physician) Visit - Inpatient
     * `'A0'` | Professional (Physician) Visit - Outpatient
     * `'A1'` | Professional (Physician) Visit - Nursing Home
     * `'A2'` | Professional (Physician) Visit - Skilled Nursing Facility
     * `'A3'` | Professional (Physician) Visit - Home
     * `'A4'` | Psychiatric
     * `'A5'` | Psychiatric - Room and Board
     * `'A6'` | Psychotherapy
     * `'A7'` | Psychiatric - Inpatient
     * `'A8'` | Psychiatric - Outpatient
     * `'A9'` | Rehabilitation
     * `'AA'` | Rehabilitation - Room and Board
     * `'AB'` | Rehabilitation - Inpatient
     * `'AC'` | Rehabilitation - Outpatient
     * `'AD'` | Occupational Therapy
     * `'AE'` | Physical Medicine
     * `'AF'` | Speech Therapy
     * `'AG'` | Skilled Nursing Care
     * `'AH'` | Skilled Nursing Care - Room and Board
     * `'AI'` | Substance Abuse
     * `'AJ'` | Alcoholism
     * `'AK'` | Drug Addiction
     * `'AL'` | Vision (Optometry)
     * `'AM'` | Frames
     * `'AN'` | Routine Exam
     * `'AO'` | Lenses
     * `'AQ'` | Nonmedically Necessary Physical
     * `'AR'` | Experimental Drug Therapy
     * `'B1'` | Burn Care
     * `'B2'` | Brand Name Prescription Drug - Formulary
     * `'B3'` | Brand Name Prescription Drug - Non-Formulary
     * `'BA'` | Independent Medical Evaluation
     * `'BB'` | Partial Hospitalization (Psychiatric)
     * `'BC'` | Day Care (Psychiatric)
     * `'BD'` | Cognitive Therapy
     * `'BE'` | Massage Therapy
     * `'BF'` | Pulmonary Rehabilitation
     * `'BG'` | Cardiac Rehabilitation
     * `'BH'` | Pediatric
     * `'BI'` | Nursery
     * `'BJ'` | Skin
     * `'BK'` | Orthopedic
     * `'BL'` | Cardiac
     * `'BM'` | Lymphatic
     * `'BN'` | Gastrointestinal
     * `'BP'` | Endocrine
     * `'BQ'` | Neurology
     * `'BR'` | Eye
     * `'BS'` | Invasive Procedures
     * `'BT'` | Gynecological
     * `'BU'` | Obstetrical
     * `'BV'` | Obstetrical/Gynecological
     * `'BW'` | Mail Order Prescription Drug: Brand Name
     * `'BX'` | Mail Order Prescription Drug: Generic
     * `'BY'` | Physician Visit - Office: Sick
     * `'BZ'` | Physician Visit - Office: Well
     * `'C1'` | Coronary Care
     * `'CA'` | Private Duty Nursing - Inpatient
     * `'CB'` | Private Duty Nursing - Home
     * `'CC'` | Surgical Benefits - Professional (Physician)
     * `'CD'` | Surgical Benefits - Facility
     * `'CE'` | Mental Health Provider - Inpatient
     * `'CF'` | Mental Health Provider - Outpatient
     * `'CG'` | Mental Health Facility - Inpatient
     * `'CH'` | Mental Health Facility - Outpatient
     * `'CI'` | Substance Abuse Facility - Inpatient
     * `'CJ'` | Substance Abuse Facility - Outpatient
     * `'CK'` | Screening X-ray
     * `'CL'` | Screening laboratory
     * `'CM'` | Mammogram, High Risk Patient
     * `'CN'` | Mammogram, Low Risk Patient
     * `'CO'` | Flu Vaccination
     * `'CP'` | Eyewear and Eyewear Accessories
     * `'CQ'` | Case Management
     * `'DG'` | Dermatology
     * `'DM'` | Durable Medical Equipment
     * `'DS'` | Diabetic Supplies
     * `'GF'` | Generic Prescription Drug - Formulary
     * `'GN'` | Generic Prescription Drug - Non-Formulary
     * `'GY'` | Allergy
     * `'IC'` | Intensive Care
     * `'MH'` | Mental Health
     * `'NI'` | Neonatal Intensive Care
     * `'ON'` | Oncology
     * `'PT'` | Physical Therapy
     * `'PU'` | Pulmonary
     * `'RN'` | Renal
     * `'RT'` | Residential Psychiatric Treatment
     * `'TC'` | Transitional Care
     * `'TN'` | Transitional Nursery Care
     * `'UC'` | Urgent Care
     *
     */
    requestServiceType?: CoverageRequestServiceTypeEnum;
    serviceTypeDescription?: string;
}
